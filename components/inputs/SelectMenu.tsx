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
import { Control, useController, useFormContext } from "react-hook-form";

interface Props {
  id: string;
  label: string;
  menuItems: any[];
  control?: Control<any>;
}

export default function SelectMenu({ id, label, menuItems, control }: Props) {
  const {
    field: { value, onChange },
  } = useController({
    name: id,
    control: control ? control : useFormContext().control,
    defaultValue: "",
    rules: { required: true },
  });

  const selectedOption = menuItems.find((item) => item.value === value);
  const ButtonIcon = selectedOption?.icon || TriangleDownIcon;
  const buttonLabel = selectedOption?.label || label;

  return (
    <Menu>
      {({ onClose }) => (
        <>
          <MenuButton
            as={MenuIconButton}
            leftIcon={<ButtonIcon />}
            name={buttonLabel}
          />
          <MenuList>
            <MenuOptionGroup
              value={value}
              onChange={(value) => {
                onClose();
                onChange(value);
              }}
            >
              {menuItems.map(({ value, label }) => (
                <MenuItemOption key={value} value={value} closeOnSelect={true}>
                  {label}
                </MenuItemOption>
              ))}
            </MenuOptionGroup>
          </MenuList>
        </>
      )}
    </Menu>
  );
}

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
