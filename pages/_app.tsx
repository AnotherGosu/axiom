import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "utils/theme";
import "focus-visible/dist/focus-visible";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
