import { VStack, Grid, GridItem, Button, Flex } from "@chakra-ui/react";
import { ImFilter } from "react-icons/im";
import CheckboxMenu from "components/inputs/CheckboxMenu";
import NumberInput from "components/inputs/NumberInput";
import { PriceInput, SquareInput } from "components/inputs/CustomNumberInputs";
import { roomsOptions } from "utils/constants";

interface Props {
  onToggle: () => void;
}

export default function Searchbar({ onToggle }: Props) {
  return (
    <Grid
      gridTemplateAreas={{
        base: `"price" "square" "floor" "rooms" "buttons"`,
        md: `"rooms rooms" "price square" "floor buttons" "floor buttons"`,
        lg: `"price square floor" "rooms buttons buttons"`,
      }}
      gap="20px"
      alignItems="end"
    >
      <GridItem gridArea="price">
        <VStack spacing="10px" align="flex-start">
          <PriceInput id="priceFrom" label="Цена" leftChildren="От" />
          <PriceInput
            id="priceTo"
            label="Цена до"
            isHiddenLabel
            leftChildren="До"
          />
        </VStack>
      </GridItem>

      <GridItem gridArea="square">
        <VStack spacing="10px" align="flex-start">
          <SquareInput
            id="commonSquareFrom"
            label="Площадь"
            leftChildren="От"
          />
          <SquareInput
            id="commonSquareTo"
            label="Площадь до"
            isHiddenLabel
            leftChildren="До"
          />
        </VStack>
      </GridItem>

      <GridItem gridArea="floor">
        <VStack spacing="10px" align="flex-start">
          <NumberInput
            id="floorFrom"
            label="Этаж"
            leftChildren="От"
            isInteger
          />
          <NumberInput
            id="floorTo"
            label="Этаж до"
            isHiddenLabel
            leftChildren="До"
            isInteger
          />
        </VStack>
      </GridItem>

      <GridItem gridArea="rooms" h="100%">
        <CheckboxMenu
          id="rooms"
          label="Количество комнат"
          options={roomsOptions}
        />
      </GridItem>

      <GridItem gridArea="buttons">
        <Flex
          flexDir={{ base: "column", lg: "row" }}
          gridColumnGap="20px"
          gridRowGap="10px"
        >
          <Button
            variant="outline"
            w="100%"
            onClick={onToggle}
            leftIcon={<ImFilter />}
          >
            Фильтры
          </Button>
          <Button w="100%" type="submit">
            Найти
          </Button>
        </Flex>
      </GridItem>
    </Grid>
  );
}
