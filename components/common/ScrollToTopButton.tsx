import { IconButton } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setIsVisible(true);
    } else if (scrolled <= 300) {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  });

  return (
    isVisible && (
      <IconButton
        onClick={scrollToTop}
        aria-label="Прокрутить к началу страницу"
        icon={<ArrowUpIcon />}
        pos="fixed"
        right="25px"
        bottom="25px"
        isRound
        size="lg"
      />
    )
  );
}
