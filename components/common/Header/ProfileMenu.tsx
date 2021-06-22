import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  useBreakpointValue,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { VscSignOut } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { BsListUl } from "react-icons/bs";
import { useRouter } from "next/router";
import { signOutUser } from "utils/auth/helpers";

export default function ProfileMenu() {
  const { push } = useRouter();
  const size = useBreakpointValue({ base: "sm", sm: "md" });

  return (
    <Menu>
      <MenuButton>
        <Avatar size={size} bg="purple.500" cursor="pointer" />
      </MenuButton>
      <MenuList>
        <MenuItem icon={<CgProfile />} onClick={() => push("/profile")}>
          Профиль
        </MenuItem>
        <MenuItem
          icon={<AddIcon />}
          onClick={() => push("/profile/add-estate")}
        >
          Добавить объект
        </MenuItem>
        <MenuItem
          icon={<BsListUl />}
          onClick={() => push("/profile/my-estates")}
        >
          Мои объекты
        </MenuItem>
        <MenuItem icon={<VscSignOut />} onClick={() => push("/api/sign-out")}>
          Выйти
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
