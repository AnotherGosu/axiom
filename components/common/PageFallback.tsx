import { Center, CircularProgress } from "@chakra-ui/react";

export default function PageFallback() {
  return (
    <Center w="100%" h="100vh">
      <CircularProgress color="purple.500" isIndeterminate />
    </Center>
  );
}
