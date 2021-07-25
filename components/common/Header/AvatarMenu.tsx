import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Avatar,
  Button,
} from "@chakra-ui/react";
import { VscSignOut } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { BsHouseDoor } from "react-icons/bs";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function AvatarMenu() {
  const { push, prefetch } = useRouter();

  useEffect(() => {
    prefetch("/profile");
    prefetch("/profile/my-estates");
  }, []);

  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded="full"
        variant="link"
        cursor="pointer"
        minW={0}
      >
        <Avatar size="sm" bg="purple.500" />
      </MenuButton>
      <MenuList>
        <MenuItem icon={<CgProfile />} onClick={() => push("/profile")}>
          Профиль
        </MenuItem>
        <MenuItem
          icon={<BsHouseDoor />}
          onClick={() => push("/profile/my-estates")}
        >
          Мои объекты
        </MenuItem>
        <MenuDivider />
        <MenuItem
          icon={<VscSignOut />}
          onClick={() => push("/api/auth/logout")}
        >
          Выйти
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
