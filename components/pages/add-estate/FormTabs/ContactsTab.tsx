import { Wrap, WrapItem } from "@chakra-ui/react";
import { PhoneInput } from "components/inputs/CustomNumberInputs";
import TextInput from "components/inputs/TextInput";
import { useFormContext } from "react-hook-form";

export default function ContactsTab() {
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
        <PhoneInput
          id="agentPhone"
          label="Телефон"
          control={control}
          isRequired
        />
      </WrapItem>
    </Wrap>
  );
}
