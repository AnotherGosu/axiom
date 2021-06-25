import { LinkProps } from "@chakra-ui/react";
import Link from "./Link";

export default function ButtonLink(props: LinkProps) {
  return (
    <Link
      borderWidth={1}
      borderRadius="md"
      px={4}
      lineHeight={1.2}
      color="white"
      bg="purple.500"
      fontWeight="semibold"
      display="inline-flex"
      alignItems="center"
      minW={10}
      h={10}
      _hover={{ textDecor: "none", bg: "purple.600" }}
      _active={{ bg: "purple.700" }}
      {...props}
    />
  );
}
