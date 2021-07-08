import { Box, Wrap, WrapItem, useRadio, useRadioGroup } from "@chakra-ui/react";
import { useController, useFormContext, Control } from "react-hook-form";

interface Props {
  id: string;
  options: any[];
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
    name: "estateType",
    defaultValue: null,
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <Wrap {...group}>
      {options.map(({ value, ...rest }) => {
        const radio = getRadioProps({ value });
        return (
          <WrapItem key={value}>
            <RadioCard {...radio} {...rest}>
              {value}
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
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          color: "white",
          bg: "purple.600",
          borderColor: "purple.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
};
