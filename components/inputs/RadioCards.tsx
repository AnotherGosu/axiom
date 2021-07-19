import {
  Box,
  Flex,
  Wrap,
  WrapItem,
  useRadio,
  useRadioGroup,
  Icon,
} from "@chakra-ui/react";
import FormControl, { FormControlProps } from "./FormControl";

interface Props extends FormControlProps {
  options: { value: string; label: string; icon?: any }[];
}

export default function RadioCards({ options, ...rest }: Props) {
  return (
    <FormControl defaultValue="" {...rest}>
      {({ ref, ...field }) => <RadioGroup options={options} {...field} />}
    </FormControl>
  );
}

const RadioGroup = ({ onChange, name, options }) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    defaultValue: "",
    onChange,
  });

  const group = getRootProps();

  return (
    <Wrap spacing="10px" {...group}>
      {options.map(({ value, label, icon }) => {
        const radio = getRadioProps({ value });
        return (
          <WrapItem key={value}>
            <RadioCard {...radio}>
              <Icon as={icon} />
              {label}
            </RadioCard>
          </WrapItem>
        );
      })}
    </Wrap>
  );
};

const RadioCard = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Flex
        {...checkbox}
        cursor="pointer"
        align="center"
        gridColumnGap="5px"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          color: "white",
          bg: "purple.500",
          borderColor: "purple.500",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        _hover={{
          boxShadow: "xl",
        }}
        transition="0.3s ease"
        px={5}
        py={3}
      >
        {props.children}
      </Flex>
    </Box>
  );
};
