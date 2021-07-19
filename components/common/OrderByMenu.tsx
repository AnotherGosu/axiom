import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuGroup,
  MenuItemOption,
} from "@chakra-ui/react";
import { UpDownIcon } from "@chakra-ui/icons";

interface Props {
  orderBy: string;
  setOrderBy: React.Dispatch<React.SetStateAction<string>>;
}

export default function OrderByMenu({ orderBy, setOrderBy }: Props) {
  return (
    <Menu>
      {({ onClose }) => (
        <>
          <MenuButton as={Button} variant="outline" leftIcon={<UpDownIcon />}>
            Сортировка
          </MenuButton>
          <MenuList>
            {menuGroups.map(({ title, items }) => (
              <MenuGroup key={title} title={title}>
                {items.map(({ value, label }) => (
                  <MenuItemOption
                    key={value}
                    value={value}
                    isChecked={value === orderBy}
                    onClick={() => {
                      setOrderBy(value);
                      onClose();
                    }}
                  >
                    {label}
                  </MenuItemOption>
                ))}
              </MenuGroup>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  );
}

const menuGroups = [
  {
    title: "Дата",
    items: [
      { value: "createdAt_DESC", label: "Сначала новые" },
      { value: "createdAt_ASC", label: "Сначала старые" },
    ],
  },
  {
    title: "Цена",
    items: [
      { value: "price_ASC", label: "По возрастанию" },
      { value: "price_DESC", label: "По убыванию" },
    ],
  },
  {
    title: "Площадь",
    items: [
      { value: "commonSquare_ASC", label: "По возрастанию" },
      { value: "commonSquare_DESC", label: "По убыванию" },
    ],
  },
];
