import { Tag, Wrap, WrapItem } from "@chakra-ui/react";
import type { Option } from "utils/types/common";

interface Props {
  options: Option[];
  value: any[];
}

export default function CheckboxMenuTagbar({ options, value }: Props) {
  const renderTags = options.filter(([option]) => value.includes(option));

  return (
    <Wrap>
      {renderTags.map(([value, title]) => (
        <WrapItem key={value}>
          <Tag variant="subtle" colorScheme="purple">
            {title}
          </Tag>
        </WrapItem>
      ))}
    </Wrap>
  );
}
