import { Box } from "@chakra-ui/react";
import Head from "components/common/Head";
import Header from "components/common/Header";
import ScrollToTopButton from "components/common/ScrollToTopButton";

interface Props {
  headTitle: string;
  children?: React.ReactNode;
}

export default function WithHeader({ headTitle, children }: Props) {
  return (
    <>
      <Head title={headTitle} />
      <Box minH="100vh">
        <Header />
        <Box p={[5, null, 10]}>{children}</Box>
      </Box>
      <ScrollToTopButton />
    </>
  );
}
