import { SimpleGrid } from "@chakra-ui/react";
import useGame, { type Game } from "./hooks/useGame";
import GameCard from "./GameCard";

const GameGrid = () => {
    const { games, error } = useGame() ;


    return (
        <>
        {error && <div>Error: {error}</div>}
        
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl:5 }} gap="10px">
            {games.map((game: Game) => (
                <GameCard key={game.id} game={game} />
            ))}
        </SimpleGrid>
        </>
    );
};

export default GameGrid;