import { Wrap, WrapItem } from "@chakra-ui/react";
import { PriceInput } from "components/inputs/CustomNumberInputs";
import Switch from "components/inputs/Switch";
import Select from "components/inputs/Select";
import { dealTypeOptions } from "utils/constants";

export default function PriceTab() {
  return (
    <>
      <Wrap spacing="20px" align="center">
        <WrapItem>
          <Select
            id="dealType"
            label="Тип сделки"
            options={dealTypeOptions}
            isRequired
          />
        </WrapItem>
        <WrapItem>
          <PriceInput id="price" label="Цена" isRequired />
        </WrapItem>
        <WrapItem>
          <PriceInput id="agencyServicePrice" label="Услуги агентства" />
        </WrapItem>
      </Wrap>

      <Wrap spacing="20px">
        <WrapItem>
          <Switch id="isBargaining" label="Торг" />
        </WrapItem>
        <WrapItem>
          <Switch id="isMortgage" label="Ипотека" />
        </WrapItem>
      </Wrap>
    </>
  );
}
