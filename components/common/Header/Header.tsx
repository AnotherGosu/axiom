import { Box, Flex } from "@chakra-ui/react";
import Logo from "./Logo";
import Nav from "./Nav";
import NavDrawer from "./NavDrawer";
import Auth from "./Auth";
import Loader from "./Loader";
import usePageLoading from "utils/hooks/usePageLoading";

export default function Header() {
  const isPageLoading = usePageLoading();

  return (
    <Box as="header" pos="sticky" top="0px" zIndex="sticky" bg="white">
      <Flex
        px={["20px", null, "50px"]}
        py="5px"
        boxShadow="md"
        justify="space-between"
        align="center"
      >
        <Logo />
        <Box display={{ base: "none", lg: "block" }}>
          <Nav />
        </Box>
        <Flex>
          <Box display={{ base: "none", lg: "block" }}>
            <Auth />
          </Box>
          <Box display={{ base: "block", lg: "none" }}>
            <NavDrawer />
          </Box>
        </Flex>
      </Flex>
      <Loader isLoading={isPageLoading} />
    </Box>
  );
}
