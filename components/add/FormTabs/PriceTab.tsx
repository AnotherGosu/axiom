import { Box, Wrap, WrapItem, VStack } from "@chakra-ui/react";
import NumberInput from "components/common/inputs/NumberInput";
import Switch from "components/common/inputs/Switch";
import Select from "components/common/inputs/Select";
import { dealTypeOptions, agentBonusOptions } from "utils/constants";
import { Control, UseFormWatch } from "react-hook-form";

interface Props {
  control: Control<any>;
  watch: UseFormWatch<any>;
}

const PriceTab: React.FC<Props> = ({ watch, control }) => {
  const agentBonusType = watch("agentBonusType");

  return (
    <Box p="30px" borderWidth="1px" borderRadius="md" borderTopRadius={0}>
      <VStack spacing="50px" align="flex-start">
        <Wrap spacing="30px" align="center">
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
            <Switch id="isBargaining" label="Торг" control={control} />
          </WrapItem>
          <WrapItem>
            <Switch id="isMortgage" label="Ипотека" control={control} />
          </WrapItem>
        </Wrap>

        <Wrap spacing="20px">
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
            <Select
              id="agentBonusType"
              label="Бонус агента"
              options={agentBonusOptions}
              control={control}
            />
          </WrapItem>
          {agentBonusType && (
            <WrapItem>
              <NumberInput
                id="agentBonusPrice"
                label="Размер бонуса"
                isDisabled={!agentBonusType}
                control={control}
                thousandSeparator={agentBonusType === "fixed"}
                rightChildren={agentBonusType === "fixed" ? "₽" : "%"}
              />
            </WrapItem>
          )}
        </Wrap>
      </VStack>
    </Box>
  );
};

export default PriceTab;
