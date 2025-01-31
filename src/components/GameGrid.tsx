import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, loading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
          {loading &&
            skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
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
