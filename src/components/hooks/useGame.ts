
import { useState, useEffect } from "react";
import apiClient from "../api-client";
import { CanceledError } from "axios";

interface Game {
    id: number;
    name: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

export const useGame = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState<Error | null>(null);
   

    useEffect(() => {
        const controller = new AbortController();
        apiClient.get<FetchGamesResponse>("/games",{signal: controller.signal})
            .then(res => {
                setGames(res.data.results);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message ? new Error(err.message) : new Error("An unknown error occurred"));
            });
        return () => controller.abort();
    }, []);

    return { games, error };
}

export default useGame;
