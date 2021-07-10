import {
  Box,
  Flex,
  Wrap,
  WrapItem,
  useRadio,
  useRadioGroup,
  Icon,
} from "@chakra-ui/react";
import { useController, useFormContext, Control } from "react-hook-form";

interface Props {
  id: string;
  options: { value: string; label: string; icon?: any }[];
  control?: Control<any>;
}

export default function RadioCards({ id, options, control }: Props) {
  const {
    field: { value, onChange },
  } = useController({
    name: id,
    control: control ? control : useFormContext().control,
    defaultValue: "",
    rules: { required: true },
  });

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: id,
    defaultValue: value,
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
}

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
