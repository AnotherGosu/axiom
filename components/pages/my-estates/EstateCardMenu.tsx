import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";

export default function EstateCardMenu() {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Опции"
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <MenuList>
        <MenuItem icon={<EditIcon />}>Изменить</MenuItem>
        <MenuItem icon={<DeleteIcon />}>Удалить</MenuItem>
      </MenuList>
    </Menu>
  );
}
