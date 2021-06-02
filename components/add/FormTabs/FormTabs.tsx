import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
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

  const tabsRef = useRef(null);
  const scrollToTabs = () => {
    if (tabsRef?.current) {
      const y =
        tabsRef.current.getBoundingClientRect().top + window.pageYOffset - 150;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (tabIndex > maxTabIndex) setMaxTabIndex(tabIndex);
  }, [tabIndex, maxTabIndex, setMaxTabIndex]);

  return (
    <Tabs variant="enclosed" index={tabIndex} onChange={setTabIndex}>
      <TabList ref={tabsRef}>
        {tabs.map((label, idx) => (
          <Tab
            key={label}
            isDisabled={idx > maxTabIndex}
            _disabled={{ opacity: "0.5" }}
          >
            {label}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabPanel.map((Tab, idx) => (
          <TabPanel key={idx}>
            <FormTab
              tabIndex={idx}
              setTabIndex={setTabIndex}
              scrollToTabs={scrollToTabs}
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

const tabPanel = [BuildingTab, ApartmentTab, MediaTab, PriceTab, ContactsTab];
