import { Tabs, Button } from "@chakra-ui/react";
import TabList from "components/estateForm/TabList";
import TabPanels from "components/estateForm/TabPanels";
import { useFormContext } from "react-hook-form";
import { editEstateFormSubmit } from "components/estateForm/helpers";
import useFormTabs from "components/estateForm/useFormTabs";

export default function FormTabs() {
  const {
    tabIndex,
    setTabIndex,
    isTabListVisible,
    tabsRef,
    nextTab,
    prevTab,
    switchToErrorTab,
  } = useFormTabs();

  const { formState, handleSubmit } = useFormContext();

  const SubmitButton = () => {
    return (
      <Button
        onClick={handleSubmit(editEstateFormSubmit, switchToErrorTab)}
        isLoading={formState.isSubmitting}
      >
        Обновить
      </Button>
    );
  };

  return (
    <Tabs w="100%" variant="enclosed" index={tabIndex} onChange={setTabIndex}>
      <TabList tabsRef={tabsRef} isTabListVisible={isTabListVisible} />
      <TabPanels
        SubmitButton={SubmitButton}
        tabIndex={tabIndex}
        nextTab={nextTab}
        prevTab={prevTab}
      />
    </Tabs>
  );
}
