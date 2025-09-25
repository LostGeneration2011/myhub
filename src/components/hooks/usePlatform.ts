import rawPlatforms from "../data/platforms.ts";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// Return a clean, typed list of top-level platforms
const platforms: Platform[] = (rawPlatforms as any[]).map((p) => ({
  id: p.id,
  name: p.name,
  slug: p.slug,
}));

const usePlatform = () => ({ data: platforms, error: null as null });

export default usePlatform;