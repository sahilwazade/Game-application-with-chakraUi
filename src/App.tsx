import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Box
          gridArea="aside"
          display={{ base: "none", lg: "block" }}
          marginX={1}
        >
          <GenreList
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </Box>
        <GridItem area="main">
          <Box paddingLeft={5}>
            <GameHeading gameQuery={gameQuery} />
            <Flex marginY={2}>
              <Box marginRight={9}>
                <PlatformSelector
                  onSelectPlatform={(platform) =>
                    setGameQuery({ ...gameQuery, platform })
                  }
                  selectedPlatform={gameQuery.platform}
                />
              </Box>
              <SortSelector
                selectedSort={gameQuery.sortOrder}
                onSelectSorting={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </Flex>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
