import { Wrap, WrapItem } from "@chakra-ui/react";
import { YearInput } from "components/inputs/CustomNumberInputs";
import NumberInput from "components/inputs/NumberInput";
import Select from "components/inputs/Select";
import Switch from "components/inputs/Switch";
import AddressInput from "components/estateForm/AddressInput";
import {
  materialTypeOptions,
  parkingTypeOptions,
  plateTypeOptions,
  ceilingTypeOptions,
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
        <WrapItem>
          <NumberInput
            id="ceilingHeight"
            label="Высота потолков"
            rightChildren="м"
          />
        </WrapItem>
      </Wrap>

      <Wrap spacing="20px">
        {selects.map((select) => (
          <WrapItem key={select.id}>
            <Select {...select} />
          </WrapItem>
        ))}
      </Wrap>

      <Wrap spacing="20px">
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
  { id: "materialType", label: "Материал стен", options: materialTypeOptions },
  { id: "ceilingType", label: "Перекрытия", options: ceilingTypeOptions },
  { id: "parkingType", label: "Парковка", options: parkingTypeOptions },
  { id: "plateType", label: "Плита", options: plateTypeOptions },
];

const switches = [
  { id: "isElevator", label: "Лифт" },
  { id: "isServiceElevator", label: "Грузовой лифт" },
];
