import placeholder from "../../assets/bonglua.png";

const getCropImageUrl = (url?: string | null) => {
  // Fallback if url is null/undefined
  if (!url) return placeholder;

  const target = "media/";
  const idx = url.indexOf(target);
  // If unexpected format, return original url
  if (idx === -1) return url;

  const insertAt = idx + target.length;
  // https://media.rawg.io/media/crop/600/400/games/...jpg
  return url.slice(0, insertAt) + "crop/600/400/" + url.slice(insertAt);
};

export default getCropImageUrl;