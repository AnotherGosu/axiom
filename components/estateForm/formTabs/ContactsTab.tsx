import { Wrap, WrapItem } from "@chakra-ui/react";
import { PhoneInput } from "components/inputs/CustomNumberInputs";
import TextInput from "components/inputs/TextInput";

export default function ContactsTab() {
  return (
    <Wrap spacing="20px">
      <WrapItem>
        <TextInput
          id="agentName"
          label="Агент"
          isRequired
          helperText="ФИО или обращение"
        />
      </WrapItem>
      <WrapItem>
        <PhoneInput id="agentPhone" label="Телефон" isRequired />
      </WrapItem>
    </Wrap>
  );
}
