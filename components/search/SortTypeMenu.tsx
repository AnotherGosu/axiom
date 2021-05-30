import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuGroup,
  MenuItem,
  forwardRef,
  ButtonProps,
  useBreakpointValue,
} from "@chakra-ui/react";
import { UpDownIcon } from "@chakra-ui/icons";

const SortMenuButton = forwardRef<ButtonProps, "button">((props, ref) => {
  const size = useBreakpointValue({ base: "md", md: "lg" });
  return (
    <Button
      variant="outline"
      size={size}
      w={["100%", null, "max-content"]}
      leftIcon={<UpDownIcon />}
      ref={ref}
      {...props}
    >
      Сортировка
    </Button>
  );
});

const SortTypeMenu: React.FC = () => {
  return (
    <Menu>
      <MenuButton as={SortMenuButton} />
      <MenuList>
        <MenuItem>По актуальности</MenuItem>
        <MenuGroup title="Дата">
          <MenuItem value="new">Сначала новые</MenuItem>
          <MenuItem value="old">Сначала старые</MenuItem>
        </MenuGroup>
        <MenuGroup title="Цена">
          <MenuItem value="priceUp">По возрастанию</MenuItem>
          <MenuItem value="priceDown">По убыванию</MenuItem>
        </MenuGroup>
        <MenuGroup title="Площадь">
          <MenuItem value="squareUp">По возрастанию</MenuItem>
          <MenuItem value="squareDown">По убыванию</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default SortTypeMenu;
