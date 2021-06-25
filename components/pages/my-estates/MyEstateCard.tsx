import { Box } from "@chakra-ui/react";
import Image from "next/image";
import MyEstateCardInfo from "./MyEstateCardInfo";
import type { UserEstate } from "utils/types/estate";

export default function MyEstateCard({ preview, ...rest }: UserEstate) {
  return (
    <Box
      borderRadius="md"
      justifyContent="space-between"
      borderWidth={1}
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
      <MyEstateCardInfo {...rest} />
    </Box>
  );
}
