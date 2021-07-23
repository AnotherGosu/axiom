import { VStack, Grid, GridItem, Button, Flex } from "@chakra-ui/react";
import { ImFilter } from "react-icons/im";
import Select from "components/inputs/Select";
import CheckboxMenu from "components/inputs/CheckboxMenu";
import NumberInput from "components/inputs/NumberInput";
import { PriceInput, SquareInput } from "components/inputs/CustomNumberInputs";
import { roomsOptions, rentTypeAsPurchaseOptions } from "utils/constants";

interface Props {
  onToggle: () => void;
}

export default function Searchbar({ onToggle }: Props) {
  return (
    <Grid
      gridTemplateAreas={{
        base: `"options" "price" "square" "floor" "buttons"`,
        md: `"options price" "square floor" "buttons buttons"`,
        lg: `"options price price" "square floor buttons"`,
        xl: `"options price square floor buttons"`,
      }}
      gridTemplateColumns={{
        lg: "max-content 1fr 1fr",
        xl: "max-content 2fr 2fr 2fr 1fr",
      }}
      gap="20px"
      alignItems="end"
    >
      <GridItem gridArea="options">
        <VStack spacing="10px" align="flex-start">
          <CheckboxMenu
            id="roomsIn"
            label="Количество комнат"
            options={roomsOptions}
          />
          <Select
            id="rentType"
            label="Покупка или аренда"
            isHiddenLabel
            isEmptyOption={false}
            options={rentTypeAsPurchaseOptions}
          />
        </VStack>
      </GridItem>

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

      <GridItem gridArea="buttons">
        <Flex flexDir="column" gridColumnGap="20px" gridRowGap="10px">
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
