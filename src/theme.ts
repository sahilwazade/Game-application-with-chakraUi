import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === "dark" ? "gray.900" : "white",
        color: props.colorMode === "dark" ? "gray.100" : "black",
      },
    }),
  },

  colors: {
    gray: {
      50: "#f7fafc",
      100: "#e2e8f0",
      200: "#cbd5e0",
      300: "#a0aec0",
      400: "#718096",
      500: "#4a5568",
      600: "#2d3748",
      700: "#1a202c", 
      800: "#171923", 
      900: "#010102", 
      //   900: "#0f111a", 
    },
  },
});

export default theme;
