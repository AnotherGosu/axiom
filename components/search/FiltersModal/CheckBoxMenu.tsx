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

const CheckBoxMenu: React.FC<Props> = ({ title, options }) => {
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
};

export default CheckBoxMenu;
