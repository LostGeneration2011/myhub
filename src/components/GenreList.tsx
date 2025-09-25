import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  Spinner,
} from "@chakra-ui/react";
import type { Genre } from "./hooks/useGenre";
import useGenre from "./hooks/useGenre";
import getCropImageUrl from "./services/image-url";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, error, loading } = useGenre();
  if (error) return null;
  if (loading) return <Spinner />;

  return (
    <>
      <Heading>Genres</Heading>
      <List.Root>
        {data.map((g) => (
          <List.Item key={g.id}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                objectFit={"cover"}
                src={getCropImageUrl(g.image_background)}
              />
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                fontSize={"md"}
                variant={"subtle"}
                fontWeight={g.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectedGenre(g)}>
                {g.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;