import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card>
        <Image objectFit="cover" src={game.background_image} />
        <CardBody
          sx={{ boxShadow: "none" }}
          // bg={colorMode === "dark" ? "#171923" : "#D9D9D9"}
          // color={colorMode === "dark" ? "#C5C5C5" : "#0E0F15"}
        >
          <HStack marginBottom={3} justifyContent="space-between">
            <Heading fontSize={"l"}>{game.name}</Heading>
            <CriticScore score={game.metacritic} />
          </HStack>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <Emoji ratings={game.rating_top} />
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
