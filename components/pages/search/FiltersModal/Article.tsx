import { Box, Heading } from "@chakra-ui/react";

interface Props {
  title: string;
  children?: React.ReactNode;
}

export default function Article({ title, children }: Props) {
  return (
    <Box as="article">
      <Heading as="h3" fontSize={["lg", "xl"]} fontWeight="semibold" mb="20px">
        {title}
      </Heading>
      {children}
    </Box>
  );
}
