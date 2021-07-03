import { Flex, Text } from "@chakra-ui/react";
import { CheckIcon, SmallCloseIcon } from "@chakra-ui/icons";

export const TextItem = ({
  title,
  text,
  children,
}: {
  title: string;
  text?: string | number;
  children?: React.ReactNode;
}) => {
  return (
    <Flex justify="space-between" gridGap="10px" align="center">
      <Text>{title}</Text>
      {children ? (
        children
      ) : (
        <Text fontWeight="semibold">{text ? text : "—"}</Text>
      )}
    </Flex>
  );
};

export const SquareItem = ({
  title,
  square,
}: {
  title: string;
  square: number;
}) => {
  return (
    <Flex justify="space-between" gridGap="10px" align="center">
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

export const BooleanItem = ({
  title,
  value,
}: {
  title: string;
  value: boolean;
}) => {
  return (
    <Flex justify="space-between" gridGap="10px" align="center">
      <Text>{title}</Text>
      {value ? (
        <CheckIcon w={4} h={4} color="green.500" />
      ) : (
        <SmallCloseIcon w={5} h={5} color="red.500" />
      )}
    </Flex>
  );
};
