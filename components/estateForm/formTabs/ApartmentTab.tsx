import { Wrap, WrapItem } from "@chakra-ui/react";
import Select from "components/inputs/Select";
import Switch from "components/inputs/Switch";
import SquareInputs from "./SquareInputs";
import ApartmentInputs from "./ApartmentInputs";
import {
  bathTypeOptions,
  stateOptions,
  windowsTypeOptions,
  roomsTypeOptions,
  roomsOptions,
  apartmentStatusOptions,
} from "utils/constants";

export default function ApartmentTab() {
  return (
    <>
      <SquareInputs />

      <ApartmentInputs />

      <Wrap spacing="20px">
        {selects.map((menu) => (
          <WrapItem key={menu.id}>
            <Select {...menu} />
          </WrapItem>
        ))}
      </Wrap>

      <Wrap spacing="40px">
        {switches.map((item) => (
          <WrapItem key={item.id}>
            <Switch {...item} />
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
}

const selects = [
  {
    id: "rooms",
    label: "Количество комнат",
    options: roomsOptions,
    rules: { required: "Это обязательное поле" },
  },
  { id: "apartmentStatus", label: "Статус", options: apartmentStatusOptions },
  { id: "roomsType", label: "Тип комнат", options: roomsTypeOptions },
  { id: "state", label: "Состояние", options: stateOptions },
  { id: "windowsType", label: "Вид из окна", options: windowsTypeOptions },
  { id: "bathType", label: "Санузел", options: bathTypeOptions },
];

const switches = [
  { id: "isRemodeled", label: "Перепланировка" },
  { id: "isRoomsFurniture", label: "Мебель в комнатах" },
  { id: "isKitchenFurniture", label: "Кухонный гарнитур" },
];
