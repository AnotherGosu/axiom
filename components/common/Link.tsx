import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import NextLink from "next/link";

interface Props extends LinkProps {
  title: string;
}

export default function Link({ title, href, ...rest }: Props) {
  return (
    <NextLink href={href} passHref>
      <ChakraLink {...rest}>{title}</ChakraLink>
    </NextLink>
  );
}
