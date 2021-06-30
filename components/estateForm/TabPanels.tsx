import {
  TabPanels as ChakraTabPanels,
  TabPanel,
  Box,
  VStack,
  Wrap,
  WrapItem,
  Button,
} from "@chakra-ui/react";

import BuildingTab from "components/estateForm/formTabs/BuildingTab";
import ApartmentTab from "components/estateForm/formTabs/ApartmentTab";
import MediaTab from "components/estateForm/formTabs/MediaTab";
import PriceTab from "components/estateForm/formTabs/PriceTab";

interface Props {
  tabIndex: number;
  nextTab: () => void;
  prevTab: () => void;
  SubmitButton: React.FC;
}

export default function TabPanels({
  tabIndex,
  nextTab,
  prevTab,
  SubmitButton,
}: Props) {
  return (
    <ChakraTabPanels>
      {tabPanels.map((Tab, idx) => (
        <TabPanel key={idx}>
          <Box p="30px" borderWidth="1px" borderRadius="md" borderTopRadius={0}>
            <VStack spacing="50px" align="flex-start">
              <Tab />
              <Wrap>
                <WrapItem>
                  <Button
                    variant="outline"
                    isDisabled={tabIndex === 0}
                    onClick={prevTab}
                  >
                    Назад
                  </Button>
                </WrapItem>
                <WrapItem>
                  <Button
                    variant="outline"
                    isDisabled={tabIndex === 3}
                    onClick={nextTab}
                  >
                    Далее
                  </Button>
                </WrapItem>
                <WrapItem>
                  <SubmitButton />
                </WrapItem>
              </Wrap>
            </VStack>
          </Box>
        </TabPanel>
      ))}
    </ChakraTabPanels>
  );
}

const tabPanels = [BuildingTab, ApartmentTab, MediaTab, PriceTab];
