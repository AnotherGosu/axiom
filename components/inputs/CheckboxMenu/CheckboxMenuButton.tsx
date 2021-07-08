import {
  Button,
  ButtonGroup,
  IconButton,
  ButtonProps,
  forwardRef,
} from "@chakra-ui/react";
import { ChevronDownIcon, CloseIcon } from "@chakra-ui/icons";
import { useRef, useState, useEffect } from "react";

interface Props extends ButtonProps {
  resetValue: () => null;
  isValue: any[];
}

const CheckboxMenuButton = forwardRef<Props, "button">(
  ({ children, isValue, resetValue, ...props }, ref) => {
    const buttonGroupRef = useRef(null);
    const [buttonGroupHeight, setButtonGroupHeight] = useState("46px");

    useEffect(() => {
      if (buttonGroupRef.current) {
        const currentHeight =
          buttonGroupRef.current.getBoundingClientRect().height;
        setButtonGroupHeight(`${currentHeight} px`);
      }
    });

    return (
      <ButtonGroup isAttached variant="outline" ref={buttonGroupRef} w="100%">
        <Button
          mr="-px"
          h={buttonGroupHeight}
          minH="40px"
          w="100%"
          py="7px"
          rightIcon={<ChevronDownIcon />}
          ref={ref}
          {...props}
        >
          {children}
        </Button>
        {isValue && (
          <IconButton
            aria-label="Очистить поле"
            h={buttonGroupHeight}
            icon={<CloseIcon />}
            onClick={resetValue}
          />
        )}
      </ButtonGroup>
    );
  }
);

export default CheckboxMenuButton;
