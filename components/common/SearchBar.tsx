import { Grid, GridItem, Button } from "@chakra-ui/react";
import Menu from "components/inputs/Menu";
import { PriceInput } from "components/inputs/CustomNumberInputs";
import { areasGroups, roomsOptions } from "utils/constants";
import { useForm } from "react-hook-form";

export default function SearchBar() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Grid
      as="form"
      gridTemplateAreas={{
        base: `"rooms" "priceFrom" "priceTo" "area" "btn"`,
        sm: `"priceFrom priceTo" "rooms area" "btn btn"`,
        lg: `"rooms priceFrom priceTo area btn"`,
      }}
      gap="25px"
      p="20px"
      borderWidth="1px"
      borderRadius="md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <GridItem gridArea="rooms">
        <Menu title="Комнаты" type="checkbox" options={roomsOptions} />
      </GridItem>
      <GridItem gridArea="priceFrom">
        <PriceInput id="priceFrom" control={control} leftChildren="От" />
      </GridItem>
      <GridItem gridArea="priceTo">
        <PriceInput id="priceTo" control={control} leftChildren="До" />
      </GridItem>
      <GridItem gridArea="area">
        <Menu title="Район" type="checkbox" groups={areasGroups} />
      </GridItem>
      <GridItem gridArea="btn">
        <Button w="100%" type="submit">
          Найти
        </Button>
      </GridItem>
    </Grid>
  );
}
