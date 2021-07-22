import { Tabs, Button } from "@chakra-ui/react";
import TabList from "components/estateForm/TabList";
import TabPanels from "components/estateForm/TabPanels";
import { useFormContext } from "react-hook-form";
import { handleAddEstate } from "components/estateForm/helpers";
import useFormTabs from "components/estateForm/useFormTabs";
import type { AddEstateForm } from "utils/types/forms";

import { useUser } from "@auth0/nextjs-auth0";

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
  const {
    user: { sub },
  } = useUser();

  const onSubmit = async (data: AddEstateForm) => {
    handleAddEstate({ data, sub });
  };
  const onError = (errors) => switchToErrorTab(errors);

  const SubmitButton = () => {
    return (
      <Button
        onClick={handleSubmit(onSubmit, onError)}
        isLoading={formState.isSubmitting}
      >
        Добавить объект
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
