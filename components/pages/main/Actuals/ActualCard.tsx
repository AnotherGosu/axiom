import { Flex } from "@chakra-ui/react";
import ActualCardInfo from "./ActualCardInfo";

import Image from "next/image";
import { ActualEstate } from "utils/types/estate";

export default function ActualCard({ preview, ...rest }: ActualEstate) {
  return (
    <Flex
      as="article"
      h="100%"
      flexDir="column"
      boxShadow="md"
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
    >
      <Image
        src={preview.url}
        alt={rest.title}
        width={400}
        height={300}
        objectFit="cover"
      />
      <ActualCardInfo {...rest} />
    </Flex>
  );
}
