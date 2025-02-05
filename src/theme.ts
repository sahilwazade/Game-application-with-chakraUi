import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#f2f2f2",
      100: "#d9d9d9",
      200: "#bfbfbf",
      300: "#a6a6a6",
      400: "#8c8c8c",
      500: "#737373",
      600: "#595959",
      700: "#404040",
      800: "#120F10",
      900: "#0d0d0d",
    },
  },
});

export default theme;

// styles: {
//   global: (props: any) => ({
//     body: {
//       bg: props.colorMode === "dark" ? "gray.900" : "white",
//       color: props.colorMode === "dark" ? "gray.100" : "black",
//     },
//   }),
// },
