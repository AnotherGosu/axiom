import { Tabs, TabList, Tab, TabPanel, TabPanels } from "@chakra-ui/react";
import BuildingTab from "./BuildingTab";
import ApartmentTab from "./ApartmentTab";
import MediaTab from "./MediaTab";
import PriceTab from "./PriceTab";
import ContactsTab from "./ContactsTab";
import { Control, UseFormWatch } from "react-hook-form";

interface Props {
  control: Control<any>;
  watch: UseFormWatch<any>;
}

const FormTabs: React.FC<Props> = ({ control, watch }) => {
  return (
    <Tabs variant="enclosed">
      <TabList>
        <Tab>Параметры дома</Tab>
        <Tab>Параметры квартиры</Tab>
        <Tab>Описание и медиа</Tab>
        <Tab>Стоимость</Tab>
        <Tab>Контакты</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <BuildingTab control={control} />
        </TabPanel>
        <TabPanel>
          <ApartmentTab control={control} />
        </TabPanel>
        <TabPanel>
          <MediaTab control={control} />
        </TabPanel>
        <TabPanel>
          <PriceTab control={control} watch={watch} />
        </TabPanel>
        <TabPanel>
          <ContactsTab control={control} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default FormTabs;
