import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error ? (
        <Text>{error}</Text>
      ) : (
        <SimpleGrid
          columns={{ sm: 1, md: 3, lg: 4, xl: 5 }}
          padding="20px"
          spacing="40px"
        >
          {games ? (
            games.map((game) => <GameCard key={game.id} game={game} />)
          ) : (
            <Text>No games found ...</Text>
          )}
        </SimpleGrid>
      )}
    </>
  );
};

export default GameGrid;
