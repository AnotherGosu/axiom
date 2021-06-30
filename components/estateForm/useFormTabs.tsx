import { useBreakpointValue } from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";

export default function useFormTabs() {
  const [tabIndex, setTabIndex] = useState(0);
  const [maxTabIndex, setMaxTabIndex] = useState(0);
  const isTabListVisible = useBreakpointValue({ base: false, md: true });

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
    }
    scrollToTabs();
  };

  useEffect(() => {
    if (tabIndex > maxTabIndex) setMaxTabIndex(tabIndex);
  }, [tabIndex, maxTabIndex, setMaxTabIndex]);

  return {
    tabIndex,
    setTabIndex,
    maxTabIndex,
    isTabListVisible,
    tabsRef,
    nextTab,
    prevTab,
    switchToErrorTab,
  };
}
