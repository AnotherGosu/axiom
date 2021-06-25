import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Link({ href, children, ...rest }: LinkProps) {
  return (
    <NextLink href={href} passHref>
      <ChakraLink {...rest}>{children}</ChakraLink>
    </NextLink>
  );
}
