import { Flex, Box, Text, Heading } from "@chakra-ui/react";
import Head from "components/common/Head";
import Image from "next/image";

interface Props {
  headTitle: string;
  heading: string;
  children: React.ReactNode;
}

export default function AuthLayout({ headTitle, heading, children }: Props) {
  return (
    <>
      <Head title={headTitle} />
      <Flex h="100vh" align="center" flexDir={{ base: "column", lg: "row" }}>
        <Flex
          flexDir="column"
          w="100%"
          p="50px"
          flexGrow={1}
          alignItems="center"
        >
          <Text
            fontWeight="bold"
            fontSize="6xl"
            letterSpacing="wider"
            mb="50px"
            color="purple.500"
          >
            Axiom
          </Text>
          <Box w="100%" maxW="lg">
            <Heading mb="20px">{heading}</Heading>
            {children}
          </Box>
        </Flex>
        <Flex
          pos="relative"
          w="100%"
          h="100%"
          flexGrow={1}
          order={{ base: -1, lg: 1 }}
        >
          <Image
            src="/sign-bg.jpg"
            alt="City view"
            layout="fill"
            objectFit="cover"
            objectPosition="bottom"
          />
        </Flex>
      </Flex>
    </>
  );
}
