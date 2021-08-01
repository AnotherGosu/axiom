import { LinkBox, LinkOverlay, Icon } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import type { NavItem } from "utils/types/common";
import NextLink from "next/link";

export default function NavSubItem({ label, href }: NavItem) {
  return (
    <LinkBox
      role="group"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      w="100%"
      p={2}
      rounded="md"
      _hover={{ bg: "purple.50" }}
      onClick={(e) => e.stopPropagation()}
    >
      <NextLink href={href} passHref>
        <LinkOverlay
          transition="all .3s ease"
          _groupHover={{ color: "purple.400" }}
          fontWeight={500}
        >
          {label}
        </LinkOverlay>
      </NextLink>

      <Icon
        as={ChevronRightIcon}
        w={5}
        h={5}
        transition="all .3s ease"
        opacity={0}
        _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
        color="purple.400"
      />
    </LinkBox>
  );
}
