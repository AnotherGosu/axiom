import { Grid, GridItem, Button, useBreakpointValue } from "@chakra-ui/react";
import InputGroup from "../inputs/InputGroup";
import Menu from "../inputs/Menu";
import { areasGroups, roomsOptions } from "utils/constants";

const SearchBar: React.FC = () => {
  const size = useBreakpointValue({ base: "md", md: "lg" });

  return (
    <Grid
      as="form"
      gridTemplateAreas={{
        base: `"rooms" "priceFrom" "priceTo" "area" "btn"`,
        sm: `"priceFrom priceTo" "rooms area" "btn btn"`,
        lg: `"rooms priceFrom priceTo area btn"`,
      }}
      gap="25px"
      p="25px"
      borderWidth="1px"
      borderRadius="md"
    >
      <GridItem gridArea="rooms">
        <Menu title="Комнаты" type="checkbox" options={roomsOptions} />
      </GridItem>
      <GridItem gridArea="priceFrom">
        <InputGroup id="priceFrom" leftChildren="от" rightChildren="₽" />
      </GridItem>
      <GridItem gridArea="priceTo">
        <InputGroup id="priceTo" leftChildren="до" rightChildren="₽" />
      </GridItem>
      <GridItem gridArea="area">
        <Menu title="Район" type="checkbox" groups={areasGroups} />
      </GridItem>
      <GridItem gridArea="btn">
        <Button w="100%" size={size}>
          Найти
        </Button>
      </GridItem>
    </Grid>
  );
};

export default SearchBar;
