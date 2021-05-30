import { Wrap, WrapItem, Square, VStack, Text, Icon } from "@chakra-ui/react";
import { Control, useController } from "react-hook-form";
import { Option } from "utils/types";
import { useState } from "react";

interface Props {
  id: string;
  cards: Array<{ icon: any; option: Option }>;
  control: Control<any>;
}

const EstateTypeCards: React.FC<Props> = ({ id, control, cards }) => {
  const {
    field: { onChange },
  } = useController({
    name: id,
    control,
    defaultValue: "",
    rules: { required: true },
  });

  const [activeCard, setActiveCard] = useState("");
  const onCardClick = (value: string) => {
    setActiveCard(value);
    onChange(value);
  };

  return (
    <Wrap spacing="20px">
      {cards.map((card) => {
        const { icon, option } = card;
        const [value, label] = option;
        return (
          <WrapItem key={value}>
            <Square
              size={["100px", "150px", "200px"]}
              borderWidth={1}
              boxShadow="md"
              borderRadius="md"
              borderColor={activeCard === value ? "purple.500" : "transparent"}
              _hover={{ boxShadow: "xl", borderColor: "purple.500" }}
              color={activeCard === value ? "purple.500" : "black"}
              transition=".4s ease"
              cursor="pointer"
              onClick={() => onCardClick(value)}
            >
              <VStack>
                <Icon as={icon} w={[5, 7, 10]} h={[5, 7, 10]} />
                <Text textAlign="center" fontSize={["sm", "md", "xl"]}>
                  {label}
                </Text>
              </VStack>
            </Square>
          </WrapItem>
        );
      })}
    </Wrap>
  );
};

export default EstateTypeCards;
