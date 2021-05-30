import { IconButton, IconButtonProps } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const HamburgerButton: React.FC<IconButtonProps> = (props) => {
  return (
    <IconButton
      {...props}
      colorScheme="green"
      size="sm"
      fontSize="2xl"
      icon={<HamburgerIcon />}
    />
  );
};

export default HamburgerButton;
