import { Wrap, WrapItem } from "@chakra-ui/react";
import { PriceInput } from "components/inputs/CustomNumberInputs";
import Switch from "components/inputs/Switch";
import Select from "components/inputs/Select";
import { dealTypeOptions } from "utils/constants";
import { useFormContext } from "react-hook-form";

export default function PriceTab() {
  const { control } = useFormContext();

  return (
    <>
      <Wrap spacing="20px" align="center">
        <WrapItem>
          <Select
            id="dealType"
            label="Тип сделки"
            options={dealTypeOptions}
            control={control}
            isRequired
          />
        </WrapItem>
        <WrapItem>
          <PriceInput id="price" label="Цена" control={control} isRequired />
        </WrapItem>
        <WrapItem>
          <PriceInput
            id="agencyServicePrice"
            label="Услуги агентства"
            control={control}
          />
        </WrapItem>
      </Wrap>

      <Wrap spacing="20px">
        <WrapItem>
          <Switch id="isBargaining" label="Торг" control={control} />
        </WrapItem>
        <WrapItem>
          <Switch id="isMortgage" label="Ипотека" control={control} />
        </WrapItem>
      </Wrap>
    </>
  );
}
