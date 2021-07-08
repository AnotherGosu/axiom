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
  ButtonProps,
} from "@chakra-ui/react";
import CheckboxMenuButton from "./CheckboxMenuButton";
import CheckboxMenuTagbar from "./CheckboxMenuTagbar";
import { Control, useController, useFormContext } from "react-hook-form";
import { Option } from "utils/types/common";

interface Props extends ButtonProps {
  id: string;
  label: string;
  options: Option[];
  control?: Control<any>;
  helperText?: string;
  isRequired?: boolean;
}

export default function CheckboxMenu({
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
    defaultValue: [],
    rules: { required: isRequired && "Это обязательное поле" },
  });

  const resetValue = () => onChange([]);

  return (
    <FormControl
      id={id}
      labe={label}
      isRequired={isRequired}
      isInvalid={invalid}
    >
      {label && <FormLabel>{label}</FormLabel>}
      <Menu>
        <MenuButton
          as={CheckboxMenuButton}
          isValue={!!value?.length}
          resetValue={resetValue}
          {...rest}
        >
          <CheckboxMenuTagbar options={options} value={value} />
        </MenuButton>
        <MenuList>
          <MenuOptionGroup value={value} onChange={onChange} type="checkbox">
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
