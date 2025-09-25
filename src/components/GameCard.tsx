import { Button, Card, HStack, Image, Text } from "@chakra-ui/react";
import type { Game } from "./hooks/useGame";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCropImageUrl from "./services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root h="100%">
      <Image
        src={getCropImageUrl(game.background_image)}
        alt="Game List"
        h="170px"
        w="100%"
        objectFit="cover"
      />
      <Card.Body gap="2">
        <Card.Title>{game.name}</Card.Title>

        <HStack justify={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          {game.metacritic !== undefined && (
            <CriticScore score={game.metacritic} />
          )}
        </HStack>

        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          $450
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid">Buy now</Button>
        <Button variant="ghost">Add to cart</Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default GameCard;