import {
  Box,
  Tab,
  TabList as ChakraTabList,
  VisuallyHidden,
} from "@chakra-ui/react";

interface Props {
  tabsRef: React.MutableRefObject<any>;
  isTabListVisible: boolean;
}

export default function TabList({ tabsRef, isTabListVisible }: Props) {
  return (
    <Box ref={tabsRef} as={isTabListVisible ? ChakraTabList : VisuallyHidden}>
      {tabs.map((label) => (
        <Tab key={label}>{label}</Tab>
      ))}
    </Box>
  );
}

const tabs = [
  "Параметры дома",
  "Параметры квартиры",
  "Описание и медиа",
  "Стоимость",
];
