import { Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}>
      <GridItem area={"nav"} bg={"coral"}>
        {" "}
        Navigation Bar
      </GridItem>
      <Show when={{ base: false, lg: true }}>
        <GridItem
          area={"aside"}
          bg={"lightblue"}
          display={{ base: "none", lg: "block" }}>
          {" "}
          Left side bar
        </GridItem>
      </Show>

      <GridItem area={"main"} bg={"lightgreen"}>
        {" "}
        Footer
      </GridItem>
    </Grid>
  );
};

export default App;
