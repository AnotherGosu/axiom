import { Box, SimpleGrid, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import CheckboxMenu from "components/inputs/CheckboxMenu";
import NumberInput from "components/inputs/NumberInput";
import Switch from "components/inputs/Switch";
import { SquareInput, YearInput } from "components/inputs/CustomNumberInputs";
import {
  bathTypeOptions,
  materialTypeOptions,
  parkingTypeOptions,
  plateTypeOptions,
  stateOptions,
  windowsTypeOptions,
  roomsTypeOptions,
  dealTypeOptions,
  apartmentStatusOptions,
} from "utils/constants";

export default function Filters() {
  return (
    <Box>
      <SimpleGrid minChildWidth="250px" spacing="50px" mt="50px">
        <VStack spacing="10px" align="flex-start">
          <SquareInput
            id="commonSquareFrom"
            label="Площадь"
            leftChildren="От"
          />
          <SquareInput id="commonSquareTo" leftChildren="До" />
        </VStack>

        <VStack spacing="10px" align="flex-start">
          <SquareInput
            id="livingSquareFrom"
            label="Жилая площадь"
            leftChildren="От"
          />
          <SquareInput id="livingSquareTo" leftChildren="До" />
        </VStack>

        <VStack spacing="10px" align="flex-start">
          <SquareInput
            id="kitchenSquareFrom"
            label="Площадь кухни"
            leftChildren="От"
          />
          <SquareInput id="kitchenSquareTo" leftChildren="До" />
        </VStack>

        <VStack spacing="10px" align="flex-start">
          <NumberInput
            id="floorFrom"
            label="Этаж"
            leftChildren="От"
            isInteger
          />
          <NumberInput id="floorTo" leftChildren="До" isInteger />
        </VStack>

        <VStack spacing="10px" align="flex-start">
          <NumberInput
            id="allFloorsFrom"
            label="Всего этажей"
            leftChildren="От"
            isInteger
          />
          <NumberInput id="allFloorsTo" leftChildren="До" isInteger />
        </VStack>
      </SimpleGrid>

      <Wrap mt="50px" spacing="50px">
        <WrapItem>
          <NumberInput
            id="balconies"
            label="Балконов"
            leftChildren="От"
            isInteger
          />
        </WrapItem>
        <WrapItem>
          <NumberInput
            id="loggias"
            label="Лоджий"
            leftChildren="От"
            isInteger
          />
        </WrapItem>
        <WrapItem>
          <YearInput id="builtYear" label="Год постройки" leftChildren="От" />
        </WrapItem>
      </Wrap>

      <Wrap mt="50px" spacing="50px" align="center">
        <WrapItem>
          <Switch id="isRoomsFurniture" label="Мебель в комнатах" />
        </WrapItem>
        <WrapItem>
          <Switch id="isKitchenFurniture" label="Кухонный гарнитур" />
        </WrapItem>
        <WrapItem>
          <Switch id="isElevator" label="Лифт" />
        </WrapItem>
        <WrapItem>
          <Switch id="isServiceElevator" label="Грузовой лифт" />
        </WrapItem>
        <WrapItem>
          <Switch id="isRemodeled" label="Перепланировка" />
        </WrapItem>
      </Wrap>

      <SimpleGrid minChildWidth="275px" spacing="50px" mt="50px">
        <CheckboxMenu id="state" label="Состояние" options={stateOptions} />
        <CheckboxMenu
          id="roomsType"
          label="Тип комнат"
          options={roomsTypeOptions}
        />
        <CheckboxMenu id="plateType" label="Плита" options={plateTypeOptions} />
        <CheckboxMenu
          id="windowsType"
          label="Вид из окон"
          options={windowsTypeOptions}
        />
        <CheckboxMenu id="bathType" label="Санузел" options={bathTypeOptions} />
        <CheckboxMenu
          id="parkingType"
          label="Парковка"
          options={parkingTypeOptions}
        />
        <CheckboxMenu
          id="materialType"
          label="Материал стен"
          options={materialTypeOptions}
        />
        <CheckboxMenu
          id="apartmentStatus"
          label="Статутс"
          options={apartmentStatusOptions}
        />
        <CheckboxMenu
          id="dealType"
          label="Тип сделки"
          options={dealTypeOptions}
        />
      </SimpleGrid>
    </Box>
  );
}
