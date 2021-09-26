import {
  Box,
  Flex,
  IconButton,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import Auth from "./Auth";
import Logo from "./Logo";
import { headerNavItems } from "utils/constants/nav";
import usePageLoading from "utils/hooks/usePageLoading";
import Loader from "./Loader";

export default function WithSubnavigation() {
  const isPageLoading = usePageLoading();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box as="header">
      <Flex
        bg="white"
        color="gray.600"
        py={2}
        px={[5, null, 10]}
        borderBottom={1}
        borderStyle="solid"
        borderColor="gray.200"
        align="center"
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={-2}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant="ghost"
            aria-label="Открыть/закрыть панель навигации"
          />
        </Flex>
        <Flex flex={1} justify={{ base: "center", md: "start" }}>
          <Logo />

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav navItems={headerNavItems} />
          </Flex>
        </Flex>

        <Flex flex={{ base: 1, md: 0 }} justify="flex-end">
          <Auth />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav navItems={headerNavItems} />
      </Collapse>
      <Loader isLoading={isPageLoading} />
    </Box>
  );
}
