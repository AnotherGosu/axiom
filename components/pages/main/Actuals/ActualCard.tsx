import { Box } from "@chakra-ui/react";
import { ActualEstate } from "utils/types/estate";
import ActualCardInfo from "./ActualCardInfo";
import Image from "next/image";

export default function ActualCard({ preview, ...rest }: ActualEstate) {
  return (
    <Box
      as="article"
      boxShadow="md"
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
    >
      <Image
        src={preview.url}
        alt={rest.title}
        width={400}
        height={250}
        layout="responsive"
        objectFit="cover"
      />
      <ActualCardInfo {...rest} />
    </Box>
  );
}
