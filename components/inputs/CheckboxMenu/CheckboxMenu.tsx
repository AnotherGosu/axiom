import {
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
} from "@chakra-ui/react";
import FormControl, { FormControlProps } from "../FormControl";
import CheckboxMenuButton from "./CheckboxMenuButton";
import CheckboxMenuTagbar from "./CheckboxMenuTagbar";
import { Option } from "utils/types/common";

interface Props extends FormControlProps {
  options: Option[];
}

export default function CheckboxMenu({ options, ...rest }: Props) {
  return (
    <FormControl defaultValue={[]} {...rest}>
      {({ value, onChange }) => (
        <Menu>
          <MenuButton
            as={CheckboxMenuButton}
            isValue={!!value?.length}
            resetValue={() => onChange([])}
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
      )}
    </FormControl>
  );
}
