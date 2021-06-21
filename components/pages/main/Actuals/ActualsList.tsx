import { Wrap, WrapItem } from "@chakra-ui/react";
import Card from "./ActualCard";

import { ActualEstate } from "utils/types/estate";

interface Props {
  estates: ActualEstate[];
}

export default function ActualsList({ estates }: Props) {
  return (
    <Wrap spacing="50px">
      {estates.map((estate) => (
        <WrapItem maxW="350px" h="100%" key={estate.id}>
          <Card {...estate} />
        </WrapItem>
      ))}
    </Wrap>
  );
}
