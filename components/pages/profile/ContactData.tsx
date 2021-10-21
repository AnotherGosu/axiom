import { Wrap, WrapItem } from "@chakra-ui/react";
import TextInput from "components/inputs/TextInput";
import { PhoneInput } from "components/inputs/CustomNumberInputs";

export default function ContactData() {
  return (
    <Wrap spacing="20px">
      <WrapItem>
        <TextInput id="contactName" label="Обращение" />
      </WrapItem>
      <WrapItem>
        <PhoneInput id="contactPhone" label="Контактный телефон" />
      </WrapItem>
    </Wrap>
  );
}
