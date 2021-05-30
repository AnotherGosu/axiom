import {
  Box,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Nav from "./Nav";

const NavDrawer: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const size = useBreakpointValue({ base: "sm", sm: "md" });

  return (
    <Box display={{ base: "block", lg: "none" }}>
      <IconButton
        aria-label="Open navigation"
        colorScheme="green"
        size={size}
        fontSize="2xl"
        icon={<HamburgerIcon />}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>

            <DrawerBody py="50px">
              <Nav onClose={onClose} />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default NavDrawer;
