import { Grid, GridItem, HStack } from "@chakra-ui/react";
import Logo from "./Logo";
import Nav from "./Nav";
import ProfileMenu from "./ProfileMenu";
import NavDrawer from "./NavDrawer";
import Auth from "./Auth";
import useUser from "utils/auth/useUser";

export default function Header() {
  const user = useUser();

  return (
    <Grid
      as="header"
      pos="sticky"
      top="0px"
      bg="white"
      zIndex="sticky"
      gridTemplateAreas={{
        base: `"logo logo profile profile"`,
        lg: `"logo nav nav profile"`,
      }}
      alignItems="center"
      px={{ base: "20px", md: "50px" }}
      py="10px"
      boxShadow="md"
    >
      <GridItem gridArea="logo" justifySelf="flex-start">
        <Logo />
      </GridItem>
      <GridItem
        gridArea="nav"
        justifySelf="center"
        display={{ base: "none", lg: "block" }}
      >
        <Nav />
      </GridItem>
      <GridItem gridArea="profile" justifySelf="flex-end">
        <HStack spacing="25px">
          {user ? <ProfileMenu /> : <Auth />}
          <NavDrawer />
        </HStack>
      </GridItem>
    </Grid>
  );
}
