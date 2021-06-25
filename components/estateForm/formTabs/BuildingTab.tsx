import { Wrap, WrapItem } from "@chakra-ui/react";
import { YearInput } from "components/inputs/CustomNumberInputs";
import Select from "components/inputs/Select";
import Switch from "components/inputs/Switch";
import AddressInput from "components/estateForm/AddressInput";
import {
  apartmentTypeOptions,
  materialTypeOptions,
  parkingTypeOptions,
} from "utils/constants";

export default function BuildingTab() {
  return (
    <>
      <AddressInput />

      <Wrap spacing="20px">
        <WrapItem>
          <YearInput
            id="builtYear"
            label="Год постройки"
            helperText="Для строящихся зданий - будущий год"
          />
        </WrapItem>
        {selects.map((select) => (
          <WrapItem key={select.id}>
            <Select {...select} />
          </WrapItem>
        ))}
      </Wrap>

      <Wrap spacing="40px">
        {switches.map((props) => (
          <WrapItem key={props.id}>
            <Switch {...props} />
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
}

const selects = [
  { id: "materialType", label: "Материал", options: materialTypeOptions },
  { id: "parkingType", label: "Парковка", options: parkingTypeOptions },
  { id: "apartmentType", label: "Тип жилья", options: apartmentTypeOptions },
];

const switches = [
  { id: "isRestrictedArea", label: "Закрытая территория" },
  { id: "isElevator", label: "Лифт" },
  { id: "isServiceElevator", label: "Грузовой лифт" },
];
