import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import BuildingTab from "./BuildingTab";
import ApartmentTab from "./ApartmentTab";
import MediaTab from "./MediaTab";
import PriceTab from "./PriceTab";
import ContactsTab from "./ContactsTab";
import FormTab from "./FormTab";
import { useState } from "react";
import { Control, UseFormWatch, FormState } from "react-hook-form";

interface Props {
  control: Control<any>;
  watch: UseFormWatch<any>;
  formState: FormState<any>;
}

const tabs = [BuildingTab, ApartmentTab, MediaTab, PriceTab, ContactsTab];

const FormTabs: React.FC<Props> = ({ control, watch, formState }) => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Tabs variant="enclosed" index={tabIndex}>
      <TabList>
        <Tab cursor="auto">Параметры дома</Tab>
        <Tab cursor="auto">Параметры квартиры</Tab>
        <Tab cursor="auto">Описание и медиа</Tab>
        <Tab cursor="auto">Стоимость</Tab>
        <Tab cursor="auto">Контакты</Tab>
      </TabList>
      <TabPanels>
        {tabs.map((Tab, idx) => (
          <TabPanel key={idx}>
            <FormTab
              tabIndex={idx}
              setTabIndex={setTabIndex}
              formState={formState}
              watch={watch}
            >
              <Tab control={control} watch={watch} />
            </FormTab>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default FormTabs;
