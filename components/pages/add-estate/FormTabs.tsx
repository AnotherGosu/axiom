import { Tabs, Button } from "@chakra-ui/react";
import TabList from "components/estateForm/TabList";
import TabPanels from "components/estateForm/TabPanels";
import { useFormContext } from "react-hook-form";
import { addEstate } from "components/estateForm/helpers";
import useFormTabs from "components/estateForm/useFormTabs";
import type { FormEstate } from "utils/types/estate";

interface Props {
  issuer: string;
}

export default function FormTabs({ issuer }: Props) {
  const {
    tabIndex,
    setTabIndex,
    maxTabIndex,
    isTabListVisible,
    tabsRef,
    nextTab,
    prevTab,
    switchToErrorTab,
  } = useFormTabs();

  const { formState, handleSubmit } = useFormContext();

  const onSubmit = async (data: FormEstate) => addEstate(data, issuer);
  const onError = (errors) => switchToErrorTab(errors);

  const SubmitButton = () => {
    return (
      <Button
        onClick={handleSubmit(onSubmit, onError)}
        isDisabled={maxTabIndex !== 4}
        isLoading={formState.isSubmitting}
      >
        Добавить объект
      </Button>
    );
  };

  return (
    <Tabs variant="enclosed" index={tabIndex} onChange={setTabIndex}>
      <TabList
        tabsRef={tabsRef}
        isTabListVisible={isTabListVisible}
        maxTabIndex={maxTabIndex}
      />
      <TabPanels
        SubmitButton={SubmitButton}
        tabIndex={tabIndex}
        nextTab={nextTab}
        prevTab={prevTab}
      />
    </Tabs>
  );
}
