import { useEffect, useState } from "react";
import apiClient from "../api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic?: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  ordering?: string; // e.g., 'name', '-name', 'metacritic', '-metacritic'
  search?: string;
}

const useGames = (query?: GameQuery) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", {
        signal: controller.signal,
        params: {
          genres: query?.genreId,
          parent_platforms: query?.platformId,
          ordering: query?.ordering,
          search: query?.search,
        },
      })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [query?.genreId, query?.platformId, query?.ordering, query?.search]);

  return { games, error, loading };
};

export default useGames;