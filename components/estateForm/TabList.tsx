import {
  Box,
  Tab,
  TabList as ChakraTabList,
  VisuallyHidden,
} from "@chakra-ui/react";

interface Props {
  tabsRef: React.MutableRefObject<any>;
  isTabListVisible: boolean;
  maxTabIndex?: number;
}

export default function TabList({
  tabsRef,
  isTabListVisible,
  maxTabIndex,
}: Props) {
  return (
    <Box ref={tabsRef} as={isTabListVisible ? ChakraTabList : VisuallyHidden}>
      {tabs.map((label, idx) => (
        <Tab
          key={label}
          isDisabled={maxTabIndex === null ? false : idx > maxTabIndex}
          _disabled={{ opacity: "0.5" }}
        >
          {label}
        </Tab>
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
