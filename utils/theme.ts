import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Button: {
      defaultProps: {
        colorScheme: "purple",
      },
    },
    Input: {
      defaultProps: {
        focusBorderColor: "purple.500",
      },
    },
    Textarea: {
      defaultProps: {
        focusBorderColor: "purple.500",
      },
    },
    Switch: {
      defaultProps: {
        colorScheme: "purple",
      },
    },
    Select: {
      defaultProps: {
        focusBorderColor: "purple.500",
      },
    },
    Tabs: {
      parts: ["tabpanel"],
      baseStyle: {
        tabpanel: {
          p: 0,
        },
      },
    },
  },
});

export default theme;
