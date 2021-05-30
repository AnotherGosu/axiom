import { Box, Flex } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <Flex flexDir="column" minH="100vh">
      <Header />
      <Flex flexDir="column" p={{ base: "20px", md: "50px" }} gridRowGap="50px">
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Layout;
