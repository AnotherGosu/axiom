import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  VisuallyHidden,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";
import BuildingTab from "./BuildingTab";
import ApartmentTab from "./ApartmentTab";
import MediaTab from "./MediaTab";
import PriceTab from "./PriceTab";
import ContactsTab from "./ContactsTab";
import FormTab from "./FormTab";
import { useState, useEffect, useRef } from "react";

const FormTabs: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [maxTabIndex, setMaxTabIndex] = useState(0);
  const isTabsPanelVisible = useBreakpointValue({ base: false, md: true });

  const tabsRef = useRef(null);
  const scrollToTabs = () => {
    if (tabsRef?.current) {
      const y =
        tabsRef.current.getBoundingClientRect().top + window.pageYOffset - 150;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const nextTab = () => {
    setTabIndex(tabIndex + 1);
    scrollToTabs();
  };

  const prevTab = () => {
    setTabIndex(tabIndex - 1);
    scrollToTabs();
  };

  const switchToErrorTab = (errors) => {
    const errorFields = Object.keys(errors);
    if (errorFields.includes("address")) {
      setTabIndex(0);
    } else if (
      errorFields.some((field) =>
        [
          "commonSquare",
          "livingSquare",
          "kitchenSquare",
          "floor",
          "allFloors",
        ].includes(field)
      )
    ) {
      setTabIndex(1);
    } else if (errorFields.includes("price")) {
      setTabIndex(3);
    } else if (
      errorFields.includes("agentName") ||
      errorFields.includes("agentPhone")
    ) {
      setTabIndex(4);
    }
    scrollToTabs();
  };

  useEffect(() => {
    if (tabIndex > maxTabIndex) setMaxTabIndex(tabIndex);
  }, [tabIndex, maxTabIndex, setMaxTabIndex]);

  return (
    <Tabs variant="enclosed" index={tabIndex} onChange={setTabIndex}>
      <Box ref={tabsRef} as={isTabsPanelVisible ? TabList : VisuallyHidden}>
        {tabs.map((label, idx) => (
          <Tab
            key={label}
            isDisabled={idx > maxTabIndex}
            _disabled={{ opacity: "0.5" }}
          >
            {label}
          </Tab>
        ))}
      </Box>
      <TabPanels>
        {tabPanels.map((Tab, idx) => (
          <TabPanel key={idx}>
            <FormTab
              tabIndex={idx}
              nextTab={nextTab}
              prevTab={prevTab}
              switchToErrorTab={switchToErrorTab}
              maxTabIndex={maxTabIndex}
            >
              <Tab />
            </FormTab>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default FormTabs;

const tabs = [
  "Параметры дома",
  "Параметры квартиры",
  "Описание и медиа",
  "Стоимость",
  "Контакты",
];

const tabPanels = [BuildingTab, ApartmentTab, MediaTab, PriceTab, ContactsTab];
