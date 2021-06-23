import { Grid } from "@chakra-ui/react";
import Card from "./ActualCard";

import { ActualEstate } from "utils/types/estate";

interface Props {
  estates: ActualEstate[];
}

export default function ActualsList({ estates }: Props) {
  return (
    <Grid
      templateColumns="repeat(auto-fit, minmax(300px, 400px))"
      gridGap="30px"
    >
      {estates.map((estate) => (
        <Card key={estate.id} {...estate} />
      ))}
    </Grid>
  );
}
