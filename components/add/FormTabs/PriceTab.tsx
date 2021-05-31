import { Wrap, WrapItem } from "@chakra-ui/react";
import NumberInput from "components/common/inputs/NumberInput";
import Switch from "components/common/inputs/Switch";
import Select from "components/common/inputs/Select";
import { dealTypeOptions } from "utils/constants";
import { Control, UseFormWatch } from "react-hook-form";

interface Props {
  control: Control<any>;
  watch?: UseFormWatch<any>;
}

const PriceTab: React.FC<Props> = ({ control }) => {
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
          <NumberInput
            id="price"
            label="Цена"
            control={control}
            rightChildren="₽"
            thousandSeparator
            isRequired
          />
        </WrapItem>
        <WrapItem>
          <NumberInput
            id="agencyServicePrice"
            label="Услуги агентства"
            rightChildren="₽"
            thousandSeparator
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
        <WrapItem>
          <Switch
            id="isReward"
            label="Встечное вознаграждение"
            control={control}
          />
        </WrapItem>
      </Wrap>
    </>
  );
};

export default PriceTab;
