import { List, ListItem, ListIcon, Grid, Flex } from "@chakra-ui/react";
import { FaParking } from "react-icons/fa";
import { GrSteps } from "react-icons/gr";
import { GiStopSign, GiSofa } from "react-icons/gi";

interface Props {
  floor?: number;
  allFloors?: number;
  isRoomsFurniture?: boolean;
  isRestricted: boolean;
  parkingType: string;
}

const Features: React.FC<Props> = ({
  floor,
  allFloors,
  isRoomsFurniture,
  parkingType,
  isRestricted,
}) => {
  return (
    <List
      as={Grid}
      gridTemplateColumns={{
        sm: "repeat(2, max-content)",
        xl: "repeat(3, max-content)",
      }}
      gridColumnGap={5}
      gridRowGap={2}
      alignItems="center"
      fontSize={{ base: "sm", md: "md", lg: "lg" }}
    >
      <ListItem as={Flex} alignItems="center">
        <ListIcon as={GrSteps} />
        {`${floor} этаж из ${allFloors}`}
      </ListItem>
      <ListItem as={Flex} alignItems="center">
        <ListIcon as={FaParking} />
        {`${parkingType} парковка`}
      </ListItem>
      {isRestricted && (
        <ListItem as={Flex} alignItems="center">
          <ListIcon as={GiStopSign} />
          {`Закрытая территория`}
        </ListItem>
      )}
      {isRoomsFurniture && (
        <ListItem as={Flex} alignItems="center">
          <ListIcon as={GiSofa} />
          {`С мебелью`}
        </ListItem>
      )}
    </List>
  );
};

export default Features;
