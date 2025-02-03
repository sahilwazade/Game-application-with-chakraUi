import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, loading } = useGenre();
  var skeletonArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      {loading && skeletonArr.map((arr) => <GenreSkeleton key={arr} />)}
      <List>
        {data.map((genre) => (
          <ListItem padding={1}>
            <HStack>
              <Image
                boxSize="25px"
                borderRadius={10}
                src={genre.image_background}
              />
              <Button
                onClick={() => onSelectGenre(genre)}
                variant="link"
                fontSize="sm"
                fontWeight={
                  genre.id === selectedGenre?.id ? "extrabold" : "normal"
                }
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
