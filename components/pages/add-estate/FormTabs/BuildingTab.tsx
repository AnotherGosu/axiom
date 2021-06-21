import { Wrap, WrapItem } from "@chakra-ui/react";
import { YearInput } from "components/inputs/CustomNumberInputs";
import Select from "components/inputs/Select";
import Switch from "components/inputs/Switch";
import AddressInput from "../AddressInput";
import {
  apartmentTypeOptions,
  materialTypeOptions,
  parkingTypeOptions,
} from "utils/constants";
import { useFormContext } from "react-hook-form";

export default function BuildingTab() {
  const { control } = useFormContext();

  return (
    <>
      <AddressInput />

      <Wrap spacing="20px">
        <WrapItem>
          <YearInput
            id="builtYear"
            label="Год постройки"
            control={control}
            helperText="Для строящихся зданий - будущий год"
          />
        </WrapItem>
        {selects.map((select) => (
          <WrapItem key={select.id}>
            <Select control={control} {...select} />
          </WrapItem>
        ))}
      </Wrap>

      <Wrap spacing="40px">
        {switches.map((props) => (
          <WrapItem key={props.id}>
            <Switch control={control} {...props} />
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
