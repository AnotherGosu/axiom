import { Flex } from "@chakra-ui/react";
import Head from "components/common/Head";
import Header from "components/common/Header";
import Footer from "components/common/Footer";
import ScrollToTopButton from "components/common/ScrollToTopButton";

interface Props {
  headTitle: string;
  children?: React.ReactNode;
}

export default function WithHeaderAndFooter({ headTitle, children }: Props) {
  return (
    <>
      <Head title={headTitle} />
      <Flex flexDir="column" minH="100vh">
        <Header />
        <Flex
          flexGrow={1}
          flexDir="column"
          p={[5, null, 10]}
          gridRowGap={["30px", null, "50px"]}
        >
          {children}
        </Flex>
        <Footer />
      </Flex>
      <ScrollToTopButton />
    </>
  );
}
