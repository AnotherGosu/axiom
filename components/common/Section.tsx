import { Box, Heading } from "@chakra-ui/react";

interface Props {
  headingTitle: string;
  hiddenHeading?: boolean;
}

const Section: React.FC<Props> = ({
  headingTitle,
  hiddenHeading,
  children,
}) => {
  return (
    <Box as="section">
      <Heading
        mb={["20px", "30px"]}
        fontSize={["2xl", "3xl", "4xl"]}
        hidden={hiddenHeading}
      >
        {headingTitle}
      </Heading>
      {children}
    </Box>
  );
};

export default Section;
