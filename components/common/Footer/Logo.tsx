import { Box, Flex, Image, Text, LinkOverlay, LinkBox } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Logo() {
  return (
    <Box py={5}>
      <Flex
        align="center"
        _before={{
          content: '""',
          borderBottom: "1px solid",
          borderColor: "gray.200",
          flexGrow: 1,
          mr: 8,
        }}
        _after={{
          content: '""',
          borderBottom: "1px solid",
          borderColor: "gray.200",
          flexGrow: 1,
          ml: 8,
        }}
      >
        <LinkBox as={Flex} alignItems="center">
          <Image src="/logo.svg" boxSize="100px" />
          <NextLink href="/" passHref>
            <LinkOverlay>
              <Text fontSize="3xl">Axiom</Text>
            </LinkOverlay>
          </NextLink>
        </LinkBox>
      </Flex>
      <Text pt={3} fontSize="sm" textAlign="center">
        © 2021 Axiom. All rights reserved
      </Text>
    </Box>
  );
}
