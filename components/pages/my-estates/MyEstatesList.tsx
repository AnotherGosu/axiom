import { Box } from "@chakra-ui/react";
import EstateCardsList from "components/common/EstateCardsList";
import MyEstatesCardContent from "./MyEstatesCardContent";
import ControlBar from "./ControlBar";
import { EstateCard } from "utils/types/estate";

interface Props {
  estates: EstateCard[];
}

export default function MyEstatesList({ estates }: Props) {
  return (
    <Box>
      <ControlBar />
      <EstateCardsList estates={estates} CardContent={MyEstatesCardContent} />
    </Box>
  );
}
