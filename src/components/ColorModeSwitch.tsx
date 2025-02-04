import { Button, HStack, useColorMode } from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <div>
      <HStack>
        <Button
          isActive={colorMode === "dark"}
          onClick={toggleColorMode}
          variant="link"
          border="none"
          fontSize="20px"
        >
          {colorMode === "dark" ? <LuSun /> : <LuMoon />}
        </Button>
      </HStack>
    </div>
  );
};

export default ColorModeSwitch;
