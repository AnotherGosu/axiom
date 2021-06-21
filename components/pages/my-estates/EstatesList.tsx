import { VStack } from "@chakra-ui/react";
import EstateCard from "./EstateCard";
import type { UserEstate } from "utils/types/estate";

interface Props {
  estates: UserEstate[];
}

export default function EstatesList({ estates }: Props) {
  return (
    <VStack spacing="20px" align="flex-start">
      {estates.map((estate) => (
        <EstateCard key={estate.id} {...estate} />
      ))}
    </VStack>
  );
}
