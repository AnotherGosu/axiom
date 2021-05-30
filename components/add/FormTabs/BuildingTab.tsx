import { Box, Wrap, WrapItem, VStack } from "@chakra-ui/react";
import NumberInput from "components/common/inputs/NumberInput";
import Select from "components/common/inputs/Select";
import Switch from "components/common/inputs/Switch";
import AddressInput from "./AddressInput";
import { materialTypeOptions, parkingTypeOptions } from "utils/constants";
import { Control } from "react-hook-form";
import React from "react";

interface Props {
  control: Control<any>;
}

const BuildingTab: React.FC<Props> = ({ control }) => {
  return (
    <Box p="30px" borderWidth="1px" borderRadius="md" borderTopRadius={0}>
      <VStack spacing="50px" align="flex-start">
        <AddressInput control={control} />

        <Wrap spacing="20px">
          <WrapItem>
            <NumberInput
              id="builtYear"
              label="Год постройки"
              control={control}
              rightChildren="г."
              format="####"
              helperText="Для строящихся зданий - будущий год"
            />
          </WrapItem>
          <WrapItem>
            <Select
              id="materialType"
              label="Материал"
              options={materialTypeOptions}
              control={control}
            />
          </WrapItem>
          <WrapItem>
            <Select
              id="parkingType"
              label="Парковка"
              options={parkingTypeOptions}
              control={control}
            />
          </WrapItem>
        </Wrap>

        <Wrap spacing="40px">
          <WrapItem>
            <Switch
              id="isRestrictedArea"
              label="Закрытая территория"
              control={control}
            />
          </WrapItem>
          <WrapItem>
            <Switch id="isElevator" label="Лифт" control={control} />
          </WrapItem>
          <WrapItem>
            <Switch
              id="isServiceElevator"
              label="Грузовой лифт"
              control={control}
            />
          </WrapItem>
        </Wrap>
      </VStack>
    </Box>
  );
};

export default BuildingTab;
