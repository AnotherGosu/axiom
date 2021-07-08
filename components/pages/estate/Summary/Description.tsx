import { Text } from "@chakra-ui/react";

interface Props {
  description: string;
}

export default function Description({ description }: Props) {
  return (
    <Text fontSize={["md", "lg"]}>
      {description ? description : "Продавец не предоставил комментарий"}
    </Text>
  );
}
