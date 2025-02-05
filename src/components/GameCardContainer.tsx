import { Box, useColorMode } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      width={"100%"}
      bg={colorMode === "light" ? "#d9d9d9" : ""}
      overflow={"hidden"}
      borderRadius={10}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
