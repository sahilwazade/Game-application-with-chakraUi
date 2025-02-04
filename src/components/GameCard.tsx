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
  const { colorMode } = useColorMode();
  return (
    <>
      <Card>
        <Image src={game.background_image} />
        <CardBody
          sx={{ boxShadow: "none" }}
          bg={colorMode === "dark" ? "#171923" : "#D9D9D9"}
          color={colorMode === "dark" ? "#C5C5C5" : "#0E0F15"}
        >
          <Heading fontSize={"l"}>{game.name}</Heading>
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
