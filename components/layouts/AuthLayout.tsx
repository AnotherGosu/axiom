import { Flex, Box, Text, Heading, useBreakpointValue } from "@chakra-ui/react";
import Head from "components/common/Head";

interface Props {
  headTitle: string;
  heading: string;
  children: React.ReactNode;
}

export default function AuthLayout({ headTitle, heading, children }: Props) {
  const showImage = useBreakpointValue({ base: false, lg: true });
  return (
    <>
      <Head title={headTitle} />
      <Flex align="center">
        <Flex
          flexDir="column"
          w="100%"
          h="100vh"
          px="20px"
          align="center"
          justify="center"
        >
          <Text
            fontWeight="bold"
            fontSize="5xl"
            letterSpacing="wider"
            mb="20px"
            color="purple.500"
          >
            Axiom
          </Text>
          <Box w="100%" maxW="lg" textAlign="center">
            <Heading mb="20px" fontSize="2xl">
              {heading}
            </Heading>
            {children}
          </Box>
        </Flex>
        {showImage && (
          <Flex
            w="100%"
            h="100vh"
            bgImage={`url("/sign-bg.jpg")`}
            bgPosition="bottom"
            bgRepeat="no-repeat"
            bgSize="cover"
          />
        )}
      </Flex>
    </>
  );
}
