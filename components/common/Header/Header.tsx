import { Box, Flex } from "@chakra-ui/react";
import Logo from "./Logo";
import Nav from "./Nav";
import ProfileMenu from "./ProfileMenu";
import NavDrawer from "./NavDrawer";
import Auth from "./Auth";
import useUser from "utils/auth/useUser";

export default function Header() {
  const user = useUser();

  return (
    <Flex
      as="header"
      pos="sticky"
      top="0px"
      zIndex="sticky"
      bg="white "
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
          {user ? <ProfileMenu /> : <Auth />}
        </Box>
        <Box display={{ base: "block", lg: "none" }}>
          <NavDrawer />
        </Box>
      </Flex>
    </Flex>
  );
}
