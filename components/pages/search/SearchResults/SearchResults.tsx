import { Box, Heading, VStack } from "@chakra-ui/react";
import SearchResultsCard from "./SearchResultsCard";
import { SearchedEstate } from "utils/types/estate";

interface Props {
  estates: SearchedEstate[];
}

export default function SearchResultsList({ estates }: Props) {
  return (
    <Box as="section">
      <Heading hidden>Результаты поиска</Heading>
      <VStack spacing="30px" alignItems="flex-start">
        {estates.map((estate) => (
          <SearchResultsCard key={estate.id} {...estate} />
        ))}
      </VStack>
    </Box>
  );
}
