import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  useBreakpointValue,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

const ProfileMenu: React.FC = () => {
  const { push } = useRouter();

  const size = useBreakpointValue({ base: "sm", sm: "md" });

  return (
    <Menu>
      <MenuButton>
        <Avatar size={size} bg="purple.500" cursor="pointer" />
      </MenuButton>
      <MenuList>
        <MenuItem icon={<AddIcon />} onClick={() => push("/estates/add")}>
          Добавить объект
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
