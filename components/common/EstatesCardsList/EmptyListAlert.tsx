import {
  Alert,
  AlertTitle,
  AlertDescription,
  AlertIcon,
} from "@chakra-ui/react";

interface Props {
  emptyListText: string;
}

export default function EmptyListAlert({ emptyListText }: Props) {
  return (
    <Alert status="warning" colorScheme="purple">
      <AlertIcon />
      <AlertTitle mr={2}>Объекты не найдены.</AlertTitle>
      <AlertDescription>{emptyListText}</AlertDescription>
    </Alert>
  );
}
