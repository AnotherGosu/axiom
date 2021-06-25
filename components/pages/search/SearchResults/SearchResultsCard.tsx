import { Box } from "@chakra-ui/react";
import SearchResultsCardInfo from "./SearchResultsCardInfo";
import Image from "next/image";
import { SearchedEstate } from "utils/types/estate";

export default function SearchResultsCard({
  preview,
  ...rest
}: SearchedEstate) {
  return (
    <Box
      as="article"
      display="inline"
      borderWidth={1}
      boxShadow="md"
      borderRadius="md"
      overflow="hidden"
    >
      <Image
        src={preview.url}
        alt={rest.title}
        width={500}
        height={300}
        layout="responsive"
        objectFit="cover"
      />
      <SearchResultsCardInfo {...rest} />
    </Box>
  );
}
