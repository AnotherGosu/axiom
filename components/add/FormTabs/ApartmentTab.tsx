import { Box, Wrap, WrapItem, VStack } from "@chakra-ui/react";
import Select from "components/common/inputs/Select";
import NumberInput from "components/common/inputs/NumberInput";
import Switch from "components/common/inputs/Switch";
import {
  buildingTypeOptions,
  bathTypeOptions,
  stateOptions,
  windowsTypeOptions,
  plateTypeOptions,
  roomsTypeOptions,
} from "utils/constants";
import { Control } from "react-hook-form";

interface Props {
  control: Control<any>;
}

const ApartmentTab: React.FC<Props> = ({ control }) => {
  const selects = [
    { id: "roomsType", label: "Тип комнат", options: roomsTypeOptions },
    { id: "state", label: "Состояние", options: stateOptions },
    {
      id: "buildingType",
      label: "Тип недвижимости",
      options: buildingTypeOptions,
    },
    { id: "windowsType", label: "Окна", options: windowsTypeOptions },
    { id: "bathType", label: "Санузел", options: bathTypeOptions },
    { id: "plateType", label: "Плита", options: plateTypeOptions },
  ];

  const switches = [
    { id: "isRemodeled", label: "Перепланировка" },
    { id: "isRoomsFurniture", label: "Мебель в комнатах" },
    { id: "isKitchenFurniture", label: "Кухонный гарнитур" },
  ];

  return (
    <Box p="30px" borderWidth="1px" borderRadius="md" borderTopRadius={0}>
      <VStack spacing="50px" align="flex-start">
        <Wrap spacing="20px">
          <WrapItem>
            <NumberInput
              id="commonSquare"
              label="Общая площадь"
              control={control}
              isRequired
              rightChildren={
                <span>
                  м<sup>2</sup>
                </span>
              }
            />
          </WrapItem>
          <WrapItem>
            <NumberInput
              id="livingSquare"
              label="Жилая площадь"
              control={control}
              rightChildren={
                <span>
                  м<sup>2</sup>
                </span>
              }
            />
          </WrapItem>
          <WrapItem>
            <NumberInput
              id="kitchenSquare"
              label="Площадь кухни"
              control={control}
              rightChildren={
                <span>
                  м<sup>2</sup>
                </span>
              }
            />
          </WrapItem>
        </Wrap>

        <Wrap spacing="20px">
          <WrapItem>
            <NumberInput
              id="rooms"
              label="Количесво комнат"
              control={control}
              isRequired
              isInteger
              helperText="Укажите 0 для студии"
            />
          </WrapItem>
          <WrapItem>
            <NumberInput id="floor" label="Этаж" control={control} isInteger />
          </WrapItem>
          <WrapItem>
            <NumberInput
              id="allFloors"
              label="Всего этажей"
              control={control}
              isInteger
            />
          </WrapItem>
        </Wrap>

        <Wrap spacing="20px">
          <WrapItem>
            <NumberInput
              id="balconies"
              label="Количесво балконов"
              control={control}
              isInteger
            />
          </WrapItem>
          <WrapItem>
            <NumberInput
              id="loggias"
              label="Количество лоджий"
              control={control}
              isInteger
            />
          </WrapItem>
        </Wrap>

        <Wrap spacing="20px">
          {selects.map((menu) => (
            <WrapItem key={menu.id}>
              <Select control={control} {...menu} />
            </WrapItem>
          ))}
        </Wrap>

        <Wrap spacing="40px">
          {switches.map((item) => (
            <WrapItem key={item.id}>
              <Switch {...item} control={control} />
            </WrapItem>
          ))}
        </Wrap>
      </VStack>
    </Box>
  );
};

export default ApartmentTab;
