import { Menu, MenuButton, MenuList, MenuItem, Avatar } from "@chakra-ui/react";
import { VscSignOut } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { BsListUl } from "react-icons/bs";
import { useRouter } from "next/router";

export default function ProfileMenu() {
  const { push } = useRouter();

  return (
    <Menu>
      <MenuButton>
        <Avatar size="sm" bg="purple.500" cursor="pointer" />
      </MenuButton>
      <MenuList>
        <MenuItem icon={<CgProfile />} onClick={() => push("/profile")}>
          Профиль
        </MenuItem>
        <MenuItem
          icon={<BsListUl />}
          onClick={() => push("/profile/my-estates")}
        >
          Мои объекты
        </MenuItem>
        <MenuItem
          icon={<VscSignOut />}
          onClick={() => push("/api/auth/logout", undefined, { shallow: true })}
        >
          Выйти
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
