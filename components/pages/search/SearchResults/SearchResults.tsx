import { Grid } from "@chakra-ui/react";
import SearchResultsCard from "./SearchResultsCard";
import { SearchedEstate } from "utils/types/estate";

interface Props {
  estates: SearchedEstate[];
}

export default function SearchResultsList({ estates }: Props) {
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(auto-fit, 500px)" }}
      gridGap="30px"
    >
      {estates.map((estate) => (
        <SearchResultsCard key={estate.id} {...estate} />
      ))}
    </Grid>
  );
}
