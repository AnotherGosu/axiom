import { SimpleGrid, Wrap, WrapItem } from "@chakra-ui/react";
import Card from "./Card";

import { Estate } from "utils/types";

interface Props {
  estates: Estate[];
}

const Actuals: React.FC<Props> = ({ estates }) => {
  return (
    <Wrap spacing="50px">
      {estates.map((estate) => (
        <WrapItem maxW="350px" h="100%" key={estate.id}>
          <Card estate={estate} />
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default Actuals;
