import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Nav from "./Nav";
import Auth from "./Auth";
import ProfileMenu from "./ProfileMenu";
import useUser from "utils/auth/useUser";

export default function NavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useUser();

  return (
    <>
      <IconButton
        aria-label="Open navigation"
        colorScheme="purple"
        size="sm"
        fontSize="xl"
        icon={<HamburgerIcon />}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>

            <DrawerBody as={VStack} spacing="50px" py="50px">
              {user ? <ProfileMenu /> : <Auth direction="column-reverse" />}
              <Nav direction="column" onClose={onClose} />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
