import { Box, SimpleGrid } from "@chakra-ui/react";
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
  ceilingTypeOptions,
} from "utils/constants";

export default function Filters() {
  return (
    <Box>
      <SimpleGrid
        columns={[1, 1, 2, 3, 4, 5]}
        spacingX="50px"
        spacingY="20px"
        mt="50px"
      >
        <SquareInput
          id="livingSquareFrom"
          label="Жилая площадь"
          leftChildren="От"
        />
        <SquareInput
          id="kitchenSquareFrom"
          label="Площадь кухни"
          leftChildren="От"
        />
        <NumberInput
          id="allFloorsFrom"
          label="Этажность"
          leftChildren="От"
          isInteger
        />
        <YearInput id="builtYearFrom" label="Год постройки" leftChildren="От" />
        <NumberInput
          id="ceilingHeight"
          label="Высота потолков"
          leftChildren="От"
          rightChildren="м"
        />
      </SimpleGrid>

      <SimpleGrid
        columns={[1, 1, 2, 3, 4, 5]}
        spacingX="50px"
        spacingY="20px"
        mt="50px"
      >
        <Switch id="isBalcony" label="Балкон / Лоджия" />
        <Switch id="isElevator" label="Лифт" />
        <Switch id="isServiceElevator" label="Грузовой лифт" />
        <Switch id="isRoomsFurniture" label="Мебель в комнатах" />
        <Switch id="isKitchenFurniture" label="Кухонный гарнитур" />
        <Switch id="isRemodeled" label="Перепланировка" />
      </SimpleGrid>

      <SimpleGrid
        columns={[1, 1, 2, 3, 4, 5]}
        spacingX="50px"
        spacingY="20px"
        mt="50px"
      >
        <CheckboxMenu id="state" label="Состояние" options={stateOptions} />
        <CheckboxMenu
          id="roomsType"
          label="Тип комнат"
          options={roomsTypeOptions}
        />
        <CheckboxMenu id="plateType" label="Плита" options={plateTypeOptions} />
        <CheckboxMenu
          id="windowsType"
          label="Вид из окна"
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
          id="ceilingType"
          label="Перекрытия"
          options={ceilingTypeOptions}
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
