import { useGame } from "./hooks/useGame";

const GameGrid = () => {
    const { games, error } = useGame();

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return <div>{games.map(game => <div key={game.id}>{game.name}</div>)}</div>;
}

export default GameGrid;