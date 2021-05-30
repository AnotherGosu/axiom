import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import NextLink from "next/link";

interface Props {
  title: string;
  href: string;
}

const Link: React.FC<Props & LinkProps> = ({ href, title, ...rest }) => {
  return (
    <NextLink href={href} passHref>
      <ChakraLink {...rest}>{title}</ChakraLink>
    </NextLink>
  );
};

export default Link;
