import { LinkBox, LinkOverlay, Text, HStack } from "@chakra-ui/react";
import Image from "next/image";
import NLink from "next/link";

export default function Logo() {
  return (
    <LinkBox as={HStack} spacing="10px">
      <Image src="/logo.svg" width={55} height={55} />
      <Text fontSize="3xl" fontWeight="bold">
        <NLink href="/" passHref>
          <LinkOverlay>Axiom</LinkOverlay>
        </NLink>
      </Text>
    </LinkBox>
  );
}
