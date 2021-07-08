import { Grid, GridItem, Button } from "@chakra-ui/react";
import { ImFilter } from "react-icons/im";
import CheckboxMenu from "components/inputs/CheckboxMenu";
import { PriceInput } from "components/inputs/CustomNumberInputs";
import { roomsOptions } from "utils/constants";

interface Props {
  onToggle: () => void;
}

export default function Searchbar({ onToggle }: Props) {
  return (
    <Grid
      gridTemplateColumns={{
        base: "1fr",
        sm: "1fr 1fr",
        md: "repeat(4, 1fr)",
        xl: "minmax(250px, max-content) 2fr 2fr 1fr 1fr",
      }}
      gridTemplateAreas={{
        base: `"rooms" "priceFrom" "priceTo" "filters" "btn"`,
        sm: `"rooms rooms" "priceFrom priceTo" "filters btn"`,
        md: `"rooms rooms rooms rooms" "priceFrom priceTo filters btn"`,
        xl: `"rooms priceFrom priceTo filters btn"`,
      }}
      gap="20px"
      alignItems="end"
    >
      <GridItem gridArea="rooms">
        <CheckboxMenu id="rooms" label="Комнаты" options={roomsOptions} />
      </GridItem>
      <GridItem gridArea="priceFrom">
        <PriceInput id="priceFrom" label="Цена от" />
      </GridItem>
      <GridItem gridArea="priceTo">
        <PriceInput id="priceTo" label="Цена до" />
      </GridItem>
      <GridItem gridArea="filters">
        <Button
          variant="outline"
          w="100%"
          onClick={onToggle}
          leftIcon={<ImFilter />}
        >
          Фильтры
        </Button>
      </GridItem>
      <GridItem gridArea="btn">
        <Button w="100%" type="submit">
          Найти
        </Button>
      </GridItem>
    </Grid>
  );
}
