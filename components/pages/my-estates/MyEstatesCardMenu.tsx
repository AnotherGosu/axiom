import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { deleteEstate } from "components/estateForm/helpers";

interface Props {
  id: string;
  mutate: any;
}

export default function MyEstatesCardMenu({ id, mutate }: Props) {
  const { push } = useRouter();

  const onDelete = async () => {
    await deleteEstate(id);
    mutate();
  };

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Опции"
        icon={<HamburgerIcon />}
        size="sm"
        variant="outline"
        mt="20px"
      />
      <MenuList>
        <MenuItem
          icon={<EditIcon />}
          onClick={() => push(`/profile/update-estate/${id}`)}
        >
          Изменить
        </MenuItem>
        <MenuItem icon={<DeleteIcon />} onClick={onDelete}>
          Удалить
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
