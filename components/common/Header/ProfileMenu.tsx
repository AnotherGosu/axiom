import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import useUser from "utils/auth/useUser";
import { AddIcon } from "@chakra-ui/icons";
import { VscSignOut } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { BsListUl } from "react-icons/bs";

export default function ProfileMenu() {
  const { push, reload } = useRouter();
  const size = useBreakpointValue({ base: "sm", sm: "md" });

  const handleSignOut = async () => {
    const res = await fetch("/api/sign-out");
    reload();
  };

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
        <MenuItem icon={<VscSignOut />} onClick={handleSignOut}>
          Выйти
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
