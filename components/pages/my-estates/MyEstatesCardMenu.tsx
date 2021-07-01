import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  EditIcon,
  DeleteIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { handleDeleteEstate } from "components/estateForm/helpers";

interface Props {
  id: string;
}

export default function MyEstatesCardMenu({ id }: Props) {
  const { push } = useRouter();
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Опции"
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <MenuList>
        <MenuItem icon={<ViewIcon />} onClick={() => push(`/estates/${id}`)}>
          Просмотреть
        </MenuItem>
        <MenuItem
          icon={<EditIcon />}
          onClick={() => push(`/profile/edit-estate/${id}`)}
        >
          Изменить
        </MenuItem>
        <MenuItem icon={<DeleteIcon />} onClick={() => handleDeleteEstate(id)}>
          Удалить
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
