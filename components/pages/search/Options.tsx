import { Grid, GridItem, Button, useBreakpointValue } from "@chakra-ui/react";

import SortTypeMenu from "./SortTypeMenu";
import FiltersModal from "./FiltersModal";

import { IoLocationSharp } from "react-icons/io5";

import { useRouter } from "next/router";

export default function Options() {
  const { push } = useRouter();
  const size = useBreakpointValue({ base: "md", md: "lg" });
  return (
    <Grid
      w="full"
      gridTemplateColumns={["1fr", "1fr 1fr", "1fr repeat(2, max-content)"]}
      gridTemplateAreas={[
        `"filter" "map" "sort"`,
        `"filter filter" "sort map"`,
        `"sort filter map"`,
      ]}
      gridColumnGap="15px"
      gridRowGap="15px"
    >
      <GridItem gridArea="sort">
        <SortTypeMenu />
      </GridItem>
      <GridItem gridArea="filter">
        <FiltersModal />
      </GridItem>
      <GridItem gridArea="map">
        <Button
          size={size}
          w={["100%", null, "max-content"]}
          leftIcon={<IoLocationSharp />}
          onClick={() => push("/map")}
        >
          На карте
        </Button>
      </GridItem>
    </Grid>
  );
}
