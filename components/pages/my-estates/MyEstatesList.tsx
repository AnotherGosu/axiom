import { Grid } from "@chakra-ui/react";
import MyEstateCard from "./MyEstateCard";
import type { UserEstate } from "utils/types/estate";

interface Props {
  estates: UserEstate[];
}

export default function MyEstatesList({ estates }: Props) {
  return (
    <Grid
      templateColumns="repeat(auto-fit, minmax(300px, 400px))"
      gridGap="30px"
    >
      {estates.map((estate) => (
        <MyEstateCard key={estate.id} {...estate} />
      ))}
    </Grid>
  );
}
