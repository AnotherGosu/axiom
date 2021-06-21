import { HStack, Box, useRadio, useRadioGroup } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  options: string[];
}

const RadioButtons: React.FC<Props> = ({ options }) => {
  const [currentValue, setCurrentValue] = useState("");

  const handleRadioChange = (value) => {
    value === currentValue ? setCurrentValue("") : setCurrentValue(value);
    console.log(value);
  };

  const { getRootProps, getRadioProps } = useRadioGroup({
    value: currentValue,
    onChange: handleRadioChange,
  });

  const group = getRootProps();
  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
};

export default RadioButtons;

const RadioCard: React.FC = ({ children, ...rest }) => {
  const { getInputProps, getCheckboxProps, state } = useRadio(rest);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "green.500",
          color: "white",
          borderColor: "green.500",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {children}
      </Box>
    </Box>
  );
};
