import { Box, Text, Avatar } from "@chakra-ui/react";
import type { Creator as CreatorFields } from "utils/types/estate";

export default function Creator({ contactName, contactPhone }: CreatorFields) {
  return (
    <Box>
      <Avatar name={contactName} />
      <Text>{contactName}</Text>
      <Text>{contactPhone}</Text>
    </Box>
  );
}
