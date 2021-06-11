import {
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  Button,
  ButtonProps,
  forwardRef,
} from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { useController, useFormContext } from "react-hook-form";

interface Props {
  id: string;
  label: string;
  menuItems: any[];
}

const SelectMenu: React.FC<Props> = ({ id, label, menuItems }) => {
  const { control } = useFormContext();

  const {
    field: { value, onChange },
  } = useController({
    name: id,
    control,
    defaultValue: "",
    rules: { required: true },
  });

  const selectedOption = menuItems.find((item) => item.value === value);
  const ButtonIcon = selectedOption?.icon || TriangleDownIcon;
  const buttonLabel = selectedOption?.label || label;

  return (
    <Menu>
      <MenuButton
        as={MenuIconButton}
        leftIcon={<ButtonIcon />}
        name={buttonLabel}
      />
      <MenuList>
        <MenuOptionGroup value={value} onChange={onChange}>
          {menuItems.map(({ value, label }) => (
            <MenuItemOption key={value} value={value}>
              {label}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default SelectMenu;

const MenuIconButton = forwardRef<ButtonProps, "button">(
  ({ children, name, ...props }, ref) => {
    return (
      <Button
        variant="outline"
        size="lg"
        w={["100%", "max-content"]}
        ref={ref}
        {...props}
      >
        {name}
      </Button>
    );
  }
);
