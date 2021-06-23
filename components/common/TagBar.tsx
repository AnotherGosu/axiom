import { Wrap, WrapProps, WrapItem, Tag } from "@chakra-ui/react";
import type { Tags } from "utils/types/estate";

interface Props extends WrapProps {
  tags: Tags;
}

export default function TagBar({ tags, ...rest }: Props) {
  const currentTags = Object.entries(colorTags).filter(([key]) => tags[key]);
  const isTags = !!currentTags.length;

  return (
    <Wrap {...rest}>
      {isTags ? (
        currentTags.map(([_, { title, color }]) => (
          <WrapItem key={title}>
            <Tag colorScheme={color}>{title}</Tag>
          </WrapItem>
        ))
      ) : (
        <WrapItem>
          <Tag bg="transparent"></Tag>
        </WrapItem>
      )}
    </Wrap>
  );
}

const colorTags = {
  isBargaining: {
    title: "Торг",
    color: "blue",
  },
  isMortgage: {
    title: "Ипотека",
    color: "green",
  },
};
