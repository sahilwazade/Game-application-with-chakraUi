import { Box, Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";

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
        <Box
          gridArea="aside"
          bg="green"
          display={{ base: "none", lg: "block" }}
        >
          aside
        </Box>
        <GridItem area="main" bg="blue">
          main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
