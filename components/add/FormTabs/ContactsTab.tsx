import { Wrap, WrapItem } from "@chakra-ui/react";
import NumberInput from "components/common/inputs/NumberInput";
import TextInput from "components/common/inputs/TextInput";
import { useFormContext } from "react-hook-form";

const ContactsTab: React.FC = () => {
  const { control } = useFormContext();

  return (
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
          isStringValue
        />
      </WrapItem>
    </Wrap>
  );
};

export default ContactsTab;
