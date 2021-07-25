import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import type { NavItem } from "utils/types/common";

export default function NavItemLink({ href, label }: NavItem) {
  return (
    <NextLink href={href} passHref>
      <Link
        display="block"
        fontSize={{ base: "md", md: "lg" }}
        fontWeight={600}
        color="gray.600"
        _hover={{
          textDecoration: "none",
          color: "gray.800",
        }}
      >
        {label}
      </Link>
    </NextLink>
  );
}
