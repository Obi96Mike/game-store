import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //1024px
      }}
    >
      <GridItem gridArea="nav" bg="">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem gridArea="aside" bg="">
          Aside
        </GridItem>
      </Show>
      <GridItem gridArea="main" bg="">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
