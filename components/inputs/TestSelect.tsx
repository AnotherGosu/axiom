import {
  FormControl,
  FormHelperText,
  FormErrorMessage,
  FormLabel,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  MenuProps,
  Button,
  ButtonProps,
  forwardRef,
  Tag,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Control, useController, useFormContext } from "react-hook-form";
import { Option } from "utils/types/common";

interface Props {
  id: string;
  label: string;
  options: Option[];
  control?: Control<any>;
  helperText?: string;
  isRequired?: boolean;
}

export default function Select({
  id,
  label,
  control,
  options,
  isRequired,
  helperText,
  ...rest
}: Props) {
  const {
    field: { value, onChange },
    fieldState: { invalid, error },
  } = useController({
    name: id,
    control: control ? control : useFormContext().control,
    defaultValue: isRequired ? options[0][0] : "",
    rules: { required: isRequired && "Это обязательное поле" },
  });

  return (
    <FormControl
      id={id}
      labe={label}
      isRequired={isRequired}
      isInvalid={invalid}
    >
      {label && <FormLabel>{label}</FormLabel>}
      <Menu {...rest}>
        <MenuButton as={SelectButton}>
          <SelectTagBar tags={options} selectedValues={value} />
        </MenuButton>
        <MenuList>
          <MenuOptionGroup onChange={onChange} type="checkbox">
            {options.map(([value, title]) => (
              <MenuItemOption key={value} value={value}>
                {title}
              </MenuItemOption>
            ))}
          </MenuOptionGroup>
        </MenuList>
      </Menu>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
}

const SelectButton = forwardRef<ButtonProps, "button">(
  ({ children, ...props }, ref) => {
    return (
      <Button
        variant="outline"
        maxW="xs"
        h="max-content"
        py="16px"
        ref={ref}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

const SelectTagBar = ({
  tags,
  selectedValues,
}: {
  tags: any[];
  selectedValues: any[];
}) => {
  const renderTags = tags.filter(([value]) => selectedValues.includes(value));
  return (
    <Wrap>
      {renderTags.map(([value, title]) => (
        <WrapItem key={value}>
          <Tag variant="outline" colorScheme="purple">
            {title}
          </Tag>
        </WrapItem>
      ))}
    </Wrap>
  );
};
