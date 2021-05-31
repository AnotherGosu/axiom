import { Wrap, WrapItem } from "@chakra-ui/react";
import NumberInput from "components/common/inputs/NumberInput";
import TextInput from "components/common/inputs/TextInput";
import { Control, UseFormWatch } from "react-hook-form";

interface Props {
  control: Control<any>;
  watch?: UseFormWatch<any>;
}

const ContactsTab: React.FC<Props> = ({ control }) => {
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
          isRawValue
        />
      </WrapItem>
    </Wrap>
  );
};

export default ContactsTab;
