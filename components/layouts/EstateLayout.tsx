import { Box, Flex } from "@chakra-ui/react";
import Head from "components/common/Head";
import Header from "components/common/Header";
import Footer from "components/common/Footer";
import ScrollToTopButton from "components/common/ScrollToTopButton";

interface Props {
  headTitle: string;
  children?: React.ReactNode;
}

export default function EstateLayout({ headTitle, children }: Props) {
  return (
    <>
      <Head title={headTitle} />
      <Flex flexDir="column" minH="100vh">
        <Header />
        <Box
          w={["100%", null, "700px"]}
          mx={[0, null, "auto"]}
          py={["20px", null, "50px"]}
          px={["20px", null, 0]}
        >
          <Flex flexDir="column" gridRowGap={["30px", null, "50px"]}>
            {children}
          </Flex>
        </Box>
        <Footer />
      </Flex>
      <ScrollToTopButton />
    </>
  );
}
