import { Flex, LinkBox } from "@chakra-ui/react";
import Info from "./Info";
import Image from "next/image";
import { Estate } from "utils/types";

interface Props {
  estate: Estate;
}

const Card: React.FC<Props> = ({ estate }) => {
  return (
    <LinkBox
      as="article"
      display="flex"
      w="100%"
      maxW="6xl"
      flexDir={{ base: "column", lg: "row" }}
      p="15px"
      gridGap="20px"
      borderWidth={1}
      boxShadow="md"
      borderRadius="md"
      _hover={{ boxShadow: "xl", borderColor: "purple.500" }}
      transition=".4s ease"
    >
      <Flex
        w={{ base: "100%", lg: "400px" }}
        minH="300px"
        flexShrink={0}
        pos="relative"
      >
        <Image
          src={estate?.images[0]?.url || "/logo.svg"}
          alt={estate.title}
          layout="fill"
          objectFit="cover"
        />
      </Flex>
      <Info estate={estate} />
    </LinkBox>
  );
};

export default Card;
