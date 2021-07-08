import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuGroup,
  MenuItem,
} from "@chakra-ui/react";
import { UpDownIcon } from "@chakra-ui/icons";

export default function SortTypeMenu() {
  return (
    <Menu>
      <MenuButton as={Button} variant="outline" leftIcon={<UpDownIcon />}>
        Сортировка
      </MenuButton>
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
}
