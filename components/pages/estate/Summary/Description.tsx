import { Text } from "@chakra-ui/react";

interface Props {
  description: string;
}

export default function Description({ description }: Props) {
  return (
    <Text maxW={{ base: "100%", md: "70%" }} fontSize={["md", "lg"]}>
      {description ? description : "Продавец не предоставил комментарий"}
    </Text>
  );
}
