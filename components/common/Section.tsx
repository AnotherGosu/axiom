import { Flex, Heading, BoxProps } from "@chakra-ui/react";

interface Props extends BoxProps {
  heading: string;
  isHiddenHeading?: boolean;
  isCenteredHeading?: boolean;
}

export default function Section({
  heading,
  isHiddenHeading = false,
  children,
  ...rest
}: Props) {
  return (
    <Flex w="100%" as="section" flexDir="column" {...rest}>
      <Heading mb="20px" size="lg" hidden={isHiddenHeading}>
        {heading}
      </Heading>
      {children}
    </Flex>
  );
}
