import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Logo() {
  return (
    <NextLink href="/" passHref>
      <Link
        fontWeight={700}
        fontSize="2xl"
        color="purple.500"
        verticalAlign="bottom"
        _hover={{ textDecor: "none", color: "purple.600" }}
      >
        Axiom
      </Link>
    </NextLink>
  );
}
