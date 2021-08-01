import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "utils/theme";
import "focus-visible/dist/focus-visible";
import { UserProvider } from "@auth0/nextjs-auth0";

export default function App({ Component, pageProps }: AppProps) {
  const { user } = pageProps;

  return (
    <UserProvider user={user}>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </UserProvider>
  );
}
