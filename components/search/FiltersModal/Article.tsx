import { Box, Heading } from "@chakra-ui/react";

interface Props {
  title: string;
}

const Article: React.FC<Props> = ({ title, children }) => {
  return (
    <Box as="article">
      <Heading as="h3" fontSize={["lg", "xl"]} fontWeight="semibold" mb="20px">
        {title}
      </Heading>
      {children}
    </Box>
  );
};

export default Article;
