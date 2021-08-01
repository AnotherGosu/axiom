import {
  Stack,
  Flex,
  Text,
  Icon,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import type { NavItem } from "utils/types/common";
import NavItemLink from "./NavItemLink";
import NavSubItem from "./NavSubItem";

interface Props {
  navItems: NavItem[];
}

export default function MobileNav({ navItems }: Props) {
  return (
    <Stack p={4} display={{ md: "none" }} spacing={4}>
      {navItems.map((navItem) => {
        return navItem.children ? (
          <NavItemCollapse key={navItem.label} {...navItem} />
        ) : (
          <NavItemLink key={navItem.label} {...navItem} />
        );
      })}
    </Stack>
  );
}

const NavItemCollapse = ({ label, children }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Stack spacing={4} onClick={onToggle} cursor="pointer">
      <Flex justify="space-between" align="center">
        <Text fontWeight={600} color="gray.600">
          {label}
        </Text>
        <Icon
          as={ChevronDownIcon}
          transition="all .25s ease-in-out"
          transform={isOpen ? "rotate(180deg)" : ""}
          w={5}
          h={5}
        />
      </Flex>
      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle="solid"
          borderColor="gray.200"
          align="start"
        >
          {children.map((child) => (
            <NavSubItem key={child.label} {...child} />
          ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
