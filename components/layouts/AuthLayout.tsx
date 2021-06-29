import { Flex, Box, Text, Heading } from "@chakra-ui/react";
import Head from "components/common/Head";

interface Props {
  headTitle: string;
  heading: string;
  children: React.ReactNode;
}

export default function AuthLayout({ headTitle, heading, children }: Props) {
  return (
    <>
      <Head title={headTitle} />
      <Flex align="center" flexDir={{ base: "column-reverse", lg: "row" }}>
        <Flex
          flexDir="column"
          w={{ base: "100%", lg: "50%" }}
          h={{ base: "65vh", lg: "100vh" }}
          p="50px"
          align="center"
          justify="center"
        >
          <Text
            fontWeight="bold"
            fontSize={{ base: "4xl", lg: "5xl" }}
            letterSpacing="wider"
            mb={{ base: "25px", lg: "50px" }}
            color="purple.500"
          >
            Axiom
          </Text>
          <Box w="100%" maxW="lg" textAlign="center">
            <Heading mb="20px" fontSize={{ base: "2xl", lg: "3xl" }}>
              {heading}
            </Heading>
            {children}
          </Box>
        </Flex>
        <Flex
          w={{ base: "100%", lg: "50%" }}
          h={{ base: "35vh", lg: "100vh" }}
          bgImage={`url("/sign-bg.jpg")`}
          bgPosition="bottom"
          bgRepeat="no-repeat"
          bgSize="cover"
        />
      </Flex>
    </>
  );
}
