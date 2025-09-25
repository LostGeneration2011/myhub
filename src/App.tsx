import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import type { Genre } from "./components/hooks/useGenre";
import type { Platform } from "./components/hooks/usePlatform";
import type { GameQuery } from "./components/hooks/useGame";

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({});

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}>
      <GridItem area={"nav"} bg={"#"}>
        <NavBar
          onSearch={(search) => setGameQuery((q) => ({ ...q, search }))}
        />
      </GridItem>

      <Show when={{ base: false, lg: true }}>
        <GridItem area={"aside"} bg={"#"} p={4}>
          <GenreList
            selectedGenre={gameQuery.genreId ? ({ id: gameQuery.genreId } as Genre) : null}
            onSelectedGenre={(genre: Genre) =>
              setGameQuery((q) => ({ ...q, genreId: genre.id }))
            }
          />
        </GridItem>
      </Show>

      <GridItem area={"main"} bg={"#"} p={4}>
        <PlatformSelector
          selectedPlatform={
            gameQuery.platformId
              ? ({ id: gameQuery.platformId } as Platform)
              : null
          }
          onSelectedPlatform={(platform: Platform) =>
            setGameQuery((q) => ({ ...q, platformId: platform.id }))
          }
        />
        <SortSelector
          selectedOrder={gameQuery.ordering}
          onSelectOrder={(ordering) =>
            setGameQuery((q) => ({ ...q, ordering }))
          }
        />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;