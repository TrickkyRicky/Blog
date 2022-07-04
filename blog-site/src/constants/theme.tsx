import { extendTheme, type ThemeComponentProps } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  styles: {
    global: (props: ThemeComponentProps) => ({
      "*": {
        fontSize: "62.5%",
        padding: 0,
        margin: 0,
      },
      "html, body": {
        color: props.colorMode === "dark" ? "white" : "gray.600",
      },
    }),
  },
};

const theme = extendTheme({ config });

export default theme;
