import { Stack, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import type { NavItem } from "utils/types/common";

export default function LinksList({ label, children }: NavItem) {
  return (
    <Stack align="flex-start">
      <Text fontWeight={600} fontSize="lg" mb={2}>
        {label}
      </Text>
      {children &&
        children.map(({ label, href }) => (
          <NextLink key={label} href={href} passHref>
            <Link>{label}</Link>
          </NextLink>
        ))}
    </Stack>
  );
}
