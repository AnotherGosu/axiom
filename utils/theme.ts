import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Nunito",
    body: "Nunito",
  },
  components: {
    Container: {
      baseStyle: {
        p: 0,
      },
    },
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
