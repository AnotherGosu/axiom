import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { CheckIcon, SmallCloseIcon } from "@chakra-ui/icons";

export const TextItem: React.FC<{ title: string; text?: string | number }> = ({
  title,
  text,
  children,
}) => {
  return (
    <Flex justify="space-between" align="center">
      <Text>{title}</Text>
      {children ? (
        children
      ) : (
        <Text fontWeight="semibold">{text ? text : "—"}</Text>
      )}
    </Flex>
  );
};

export const SquareItem: React.FC<{ title: string; square: number }> = ({
  title,
  square,
}) => {
  return (
    <Flex justify="space-between" align="center">
      <Text>{title}</Text>
      <Text fontWeight="semibold">
        {square ? (
          <span>
            {`${square} м`}
            <sup>2</sup>
          </span>
        ) : (
          "—"
        )}
      </Text>
    </Flex>
  );
};

export const BooleanItem: React.FC<{ title: string; value: boolean }> = ({
  title,
  value,
}) => {
  return (
    <Flex justify="space-between" align="center">
      <Text>{title}</Text>
      {value ? (
        <CheckIcon w={4} h={4} color="green.500" />
      ) : (
        <SmallCloseIcon w={5} h={5} color="red.500" />
      )}
    </Flex>
  );
};

export const Container: React.FC = ({ children }) => (
  <SimpleGrid
    minChildWidth="300px"
    spacingX="100px"
    spacingY="20px"
    fontSize={{ base: "md", md: "lg" }}
  >
    {children}
  </SimpleGrid>
);
