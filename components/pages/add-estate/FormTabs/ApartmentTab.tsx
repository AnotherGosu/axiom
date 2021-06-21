import { Wrap, WrapItem } from "@chakra-ui/react";
import Select from "components/inputs/Select";
import Switch from "components/inputs/Switch";
import SquareInputs from "./SquareInputs";
import ApartmentInputs from "./ApartmentInputs";
import {
  buildingTypeOptions,
  bathTypeOptions,
  stateOptions,
  windowsTypeOptions,
  plateTypeOptions,
  roomsTypeOptions,
  roomsOptions,
} from "utils/constants";
import { useFormContext } from "react-hook-form";

export default function ApartmentTab() {
  const { control } = useFormContext();

  return (
    <>
      <SquareInputs />

      <ApartmentInputs />

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
}

const selects = [
  {
    id: "rooms",
    label: "Количесво комнат",
    options: roomsOptions,
    isRequired: true,
  },
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
