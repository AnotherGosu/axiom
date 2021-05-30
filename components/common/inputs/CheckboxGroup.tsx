import {
  Checkbox,
  CheckboxGroup as ChakraCheckboxGroup,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

interface Props {
  options: Array<{ title: string; value: string }>;
}

const CheckboxGroup: React.FC<Props> = ({ options }) => {
  return (
    <ChakraCheckboxGroup colorScheme="green">
      <Wrap spacing={5}>
        {options.map(({ title, value }) => (
          <WrapItem key={title}>
            <Checkbox value={value}>{title}</Checkbox>
          </WrapItem>
        ))}
      </Wrap>
    </ChakraCheckboxGroup>
  );
};

export default CheckboxGroup;
