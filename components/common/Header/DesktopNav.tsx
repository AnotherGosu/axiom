import {
  Stack,
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Text,
} from "@chakra-ui/react";
import NavSubItem from "./NavSubItem";
import NavItemLink from "./NavItemLink";
import type { NavItem } from "utils/types/common";

interface Props {
  navItems: NavItem[];
}

export default function DesktopNav({ navItems }: Props) {
  return (
    <Stack direction="row" spacing={8} align="center">
      {navItems.map((navItem) =>
        navItem.children ? (
          <NavItemDropdown key={navItem.label} {...navItem} />
        ) : (
          <NavItemLink key={navItem.label} {...navItem} />
        )
      )}
    </Stack>
  );
}

const NavItemDropdown = ({ label, children }: NavItem) => (
  <Box>
    <Popover trigger="hover" placement="bottom-start">
      <PopoverTrigger>
        <Text
          fontSize="lg"
          fontWeight={600}
          color="gray.600"
          cursor="default"
          _hover={{
            color: "gray.800",
          }}
        >
          {label}
        </Text>
      </PopoverTrigger>

      <PopoverContent as={Stack} border={0} boxShadow="xl" p={4} rounded="xl">
        {children.map((child) => (
          <NavSubItem key={child.label} {...child} />
        ))}
      </PopoverContent>
    </Popover>
  </Box>
);
