import { Flex } from "@chakra-ui/react";
import Head from "components/common/Head";
import Header from "components/common/Header";
import Footer from "components/common/Footer";

interface Props {
  headTitle: string;
  children?: React.ReactNode;
}

export default function PageLayout({ headTitle, children }: Props) {
  return (
    <>
      <Head title={headTitle} />
      <Flex flexDir="column" minH="100vh">
        <Header />
        <Flex
          flexDir="column"
          p={["20px", null, "50px"]}
          gridRowGap={["20px", null, "50px"]}
        >
          {children}
        </Flex>
        <Footer />
      </Flex>
    </>
  );
}
