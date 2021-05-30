import { LinkBox, LinkOverlay, Text, HStack } from "@chakra-ui/react";
import Image from "next/image";
import NLink from "next/link";

const Logo: React.FC = () => {
  return (
    <LinkBox as={HStack} spacing="10px">
      <Image src="/logo.svg" width={75} height={75} />
      <Text fontSize="4xl" fontWeight="bold">
        <NLink href="/" passHref>
          <LinkOverlay>Axiom</LinkOverlay>
        </NLink>
      </Text>
    </LinkBox>
  );
};

export default Logo;
