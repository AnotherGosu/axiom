import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "utils/theme";
import "focus-visible/dist/focus-visible";
import Layout from "components/common/Layout";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
