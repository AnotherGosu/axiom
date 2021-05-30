import { Text } from "@chakra-ui/react";

interface Props {
  description: string;
}

const Description: React.FC<Props> = ({ description }) => {
  return (
    <Text maxW={{ base: "100%", md: "70%" }} fontSize={["md", "lg"]}>
      {description ? description : "Продавец не предоставил комментарий"}
    </Text>
  );
};

export default Description;
