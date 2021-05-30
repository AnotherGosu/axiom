import { Box, Wrap, WrapItem, VStack } from "@chakra-ui/react";
import NumberInput from "components/common/inputs/NumberInput";
import TextInput from "components/common/inputs/TextInput";
import { Control } from "react-hook-form";

interface Props {
  control: Control<any>;
}

const ContactsTab: React.FC<Props> = ({ control }) => {
  return (
    <Box p="30px" borderWidth="1px" borderRadius="md" borderTopRadius={0}>
      <VStack spacing="50px" align="flex-start">
        <Wrap spacing="20px">
          <WrapItem>
            <TextInput
              id="agentName"
              label="Агент"
              control={control}
              isRequired
              helperText="ФИО или обращение"
            />
          </WrapItem>
          <WrapItem>
            <NumberInput
              id="agentPhone"
              label="Телефон"
              control={control}
              format="+7 (###) ###-##-##"
              isRequired
              isRawValue
            />
          </WrapItem>
        </Wrap>
      </VStack>
    </Box>
  );
};

export default ContactsTab;
