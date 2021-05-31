import { Wrap, WrapItem } from "@chakra-ui/react";
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
  roomsOptions,
} from "utils/constants";
import { Control, UseFormWatch } from "react-hook-form";

interface Props {
  control: Control<any>;
  watch?: UseFormWatch<any>;
}

const ApartmentTab: React.FC<Props> = ({ control, watch }) => {
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
    <>
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
            watchMaxValue={+watch("commonSquare")}
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
            watchMaxValue={+watch("livingSquare")}
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
          <Select
            id="rooms"
            label="Количесво комнат"
            options={roomsOptions}
            control={control}
            isRequired
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
    </>
  );
};

export default ApartmentTab;
