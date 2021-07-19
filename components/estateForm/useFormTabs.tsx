import { useBreakpointValue } from "@chakra-ui/react";
import { useState, useRef } from "react";
import ScrollIntoView from "utils/hooks/scrollIntoView";

export default function useFormTabs() {
  const [tabIndex, setTabIndex] = useState(0);
  const isTabListVisible = useBreakpointValue({ base: false, md: true });

  const tabsRef = useRef(null);

  const nextTab = () => {
    setTabIndex(tabIndex + 1);
    ScrollIntoView({ ref: tabsRef });
  };

  const prevTab = () => {
    setTabIndex(tabIndex - 1);
    ScrollIntoView({ ref: tabsRef });
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
          "rooms",
        ].includes(field)
      )
    ) {
      setTabIndex(1);
    } else if (
      errorFields.includes("dealType") ||
      errorFields.includes("price")
    ) {
      setTabIndex(3);
    }
    ScrollIntoView({ ref: tabsRef });
  };

  return {
    tabIndex,
    setTabIndex,
    isTabListVisible,
    tabsRef,
    nextTab,
    prevTab,
    switchToErrorTab,
  };
}
