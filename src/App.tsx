import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/ui/NavBar";

const App = () => {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}>
      <GridItem area={"nav"} bg={"#"}>
        {" "}
        <NavBar />
      </GridItem>
      <Show when={{ base: false, lg: true }}>
        <GridItem
          area={"aside"}
          bg={"#"}
          display={{ base: "none", lg: "block" }}>
          {" "}
          Left side bar
        </GridItem>
      </Show>

      <GridItem area={"main"} bg={"#"}>
        {" "}
        Footer
      </GridItem>
    </Grid>
  );
};

export default App;
