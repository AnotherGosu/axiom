import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  useBreakpointValue,
} from "@chakra-ui/react";

interface Props {
  title: string;
  options: any[];
}

export default function CheckBoxMenu({ title, options }: Props) {
  const size = useBreakpointValue({ base: "md", sm: "lg" });

  return (
    <Menu closeOnSelect={false}>
      <MenuButton as={Button} variant="outline" size={size}>
        {title}
      </MenuButton>
      <MenuList>
        <MenuOptionGroup type="checkbox">
          {options.map(({ value, title }) => (
            <MenuItemOption key={title} value={value}>
              {title}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
}
