import { Wrap, Tag } from "@chakra-ui/react";
import { colorTags } from "utils/constants";
import { Tags } from "utils/types";

interface Props {
  tags: Tags;
}

const TagBar: React.FC<Props> = ({ tags }) => {
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
};

export default TagBar;
