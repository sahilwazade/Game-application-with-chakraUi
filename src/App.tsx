import { Box, Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Box gridArea="aside" display={{ base: "none", lg: "block" }}>
          aside
        </Box>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
