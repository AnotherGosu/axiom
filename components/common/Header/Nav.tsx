import { Stack, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { headerNavLinks as links } from "utils/constants";

interface Props {
  onClose?: () => void;
}

export default function Nav({ onClose }: Props) {
  return (
    <Stack
      as="nav"
      direction={{ base: "column", lg: "row" }}
      alignItems="center"
      spacing="50px"
      fontSize="2xl"
    >
      {links.map(({ title, href }) => (
        <NextLink href={href} key={title} passHref>
          <Link onClick={onClose}>{title}</Link>
        </NextLink>
      ))}
    </Stack>
  );
}
