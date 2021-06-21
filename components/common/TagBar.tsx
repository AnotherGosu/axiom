import { Wrap, Tag } from "@chakra-ui/react";
import { colorTags } from "utils/constants";
import { Tags } from "utils/types/estate";

export default function TagBar(tags: Tags) {
  const currentTags = Object.entries(colorTags).filter(([key]) => tags[key]);
  const isTags = !!currentTags.length;

  return (
    <Wrap>
      {isTags ? (
        currentTags.map(([_, { title, color }]) => (
          <Tag key={title} colorScheme={color}>
            {title}
          </Tag>
        ))
      ) : (
        <Tag bg="transparent"></Tag>
      )}
    </Wrap>
  );
}
