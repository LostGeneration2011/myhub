import genres from "../data/genres.ts";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenre = () => {
  // Our local genres data is a rich list; we only need a few fields
  const data = (genres as any[]).map((g) => ({
    id: g.id as number,
    name: g.name as string,
    slug: g.slug as string,
    image_background: g.image_background as string,
  })) as Genre[];
  return { data, error: null as null, loading: false };
};

export default useGenre;
