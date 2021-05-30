import { Box, Heading, VStack } from "@chakra-ui/react";
import Card from "./Card";
import { Estate } from "utils/types";

interface Props {
  estates: Estate[];
}

const SearchResults: React.FC<Props> = ({ estates }) => {
  return (
    <Box as="section">
      <Heading hidden>Результаты поиска</Heading>
      <VStack spacing="30px" alignItems="flex-start">
        {estates.map((estate) => (
          <Card key={estate.id} estate={estate} />
        ))}
      </VStack>
    </Box>
  );
};

export default SearchResults;
