import { Alert, AlertIcon } from "@chakra-ui/react";

interface Props {
  emptyListText: string;
}

export default function EmptyListAlert({ emptyListText }: Props) {
  return (
    <Alert status="warning" colorScheme="purple" w="max-content">
      <AlertIcon />
      {emptyListText}
    </Alert>
  );
}
