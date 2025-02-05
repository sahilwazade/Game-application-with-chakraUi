import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, loading } = useGenre();
  var skeletonArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <>
      <Heading fontSize="xl">Genres</Heading>
      {loading && skeletonArr.map((arr) => <GenreSkeleton key={arr} />)}
      <List>
        {data.map((genre) => (
          <ListItem padding={1} key={genre.id}>
            <HStack>
              <Image
                boxSize="25px"
                objectFit="cover"
                borderRadius={10}
                src={genre.image_background}
              />
              <Button
                whiteSpace="nowrap"
                fontWeight={genre.id === selectedGenre?.id ? "extrabold" : ""}
                //color={genre.id === selectedGenre?.id ? "#909090" : ""}
                variant="unstyled"
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
