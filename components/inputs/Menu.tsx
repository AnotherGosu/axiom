import {
  Menu as ChackraMenu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  MenuDivider,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { MenuGroup, Option } from "utils/types/common";

interface WithOptions {
  type: "radio" | "checkbox";
  title: string;
  isRequired?: boolean;
  options: Option[];
}

interface WithGroups {
  type: "radio" | "checkbox";
  title: string;
  isRequired?: boolean;
  groups: MenuGroup[];
}

type Props = WithOptions | WithGroups;

const isGroups = (props: Props): props is WithGroups => "groups" in props;

const Menu: React.FC<Props> = (props) => {
  const size = useBreakpointValue({ base: "md", md: "lg" });

  const [value, setInnerValue] = useState([]);

  const handleCheckbox = (newValue: string[]) => {
    setInnerValue(newValue);
    // props.setValue(props.id, newValue);
  };

  const handleRadio = (newValue: string[]) => {
    const chosenValue = newValue.pop();
    setInnerValue([chosenValue]);
    // chosenValue === undefined
    //   ? props.setValue(props.id, "")
    //   : props.setValue(props.id, chosenValue);
  };

  let content = <></>;

  if (isGroups(props)) {
    content = (
      <>
        {props.groups.map(({ title, options }, idx) => (
          <div key={title}>
            <MenuOptionGroup
              title={title}
              type="checkbox"
              value={value}
              onChange={
                props.type === "checkbox" ? handleCheckbox : handleRadio
              }
            >
              {options.map(([value, title]) => (
                <MenuItemOption key={title} value={value}>
                  {title}
                </MenuItemOption>
              ))}
            </MenuOptionGroup>
            {idx !== props.groups.length - 1 && <MenuDivider />}
          </div>
        ))}
      </>
    );
  } else {
    content = (
      <MenuOptionGroup
        type="checkbox"
        value={value}
        onChange={props.type === "checkbox" ? handleCheckbox : handleRadio}
      >
        {props.options.map(([value, title]) => (
          <MenuItemOption key={title} value={value}>
            {title}
          </MenuItemOption>
        ))}
      </MenuOptionGroup>
    );
  }

  return (
    <ChackraMenu closeOnSelect={false} matchWidth>
      <MenuButton
        as={Button}
        borderColor={props.isRequired && !value[0] ? "red.500" : "purple.500"}
        variant="outline"
        w="100%"
        size={size}
      >
        {props.title}
      </MenuButton>
      <MenuList maxW="80vw">{content}</MenuList>
    </ChackraMenu>
  );
};

export default Menu;
