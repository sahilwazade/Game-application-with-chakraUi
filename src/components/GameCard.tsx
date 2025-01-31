import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  console.log("game:", game);
  const { colorMode } = useColorMode();
  return (
    <>
      <Card
        width={"200px"}
        bg={colorMode === "dark" ? "blackAlpha.900" : "#D9D9D9"}
        overflow={"hidden"}
      >
        <Image src={game.background_image} />
        <CardBody
          height={"180px"}
          color={colorMode === "dark" ? "#C5C5C5" : "#0E0F15"}
        >
          <Heading fontSize={"xl"}>{game.name}</Heading>
          <HStack justifyContent="space-between">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
