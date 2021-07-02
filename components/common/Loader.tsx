import { Progress } from "@chakra-ui/react";

interface Props {
  isLoading: boolean;
}

export default function Loader({ isLoading }: Props) {
  return (
    <Progress
      size="xs"
      isIndeterminate
      colorScheme="purple"
      opacity={isLoading ? 1 : 0}
      transition="0.3s ease"
    />
  );
}
