import { Flex } from "@chakra-ui/react";
import SortTypeMenu from "./SortTypeMenu";
import ButtonLink from "components/common/ButtonLink";
import { IoLocationSharp } from "react-icons/io5";

export default function Options() {
  return (
    <Flex justifyContent="space-between">
      <SortTypeMenu />
      <ButtonLink href="/map" leftIcon={<IoLocationSharp />}>
        На карте
      </ButtonLink>
    </Flex>
  );
}
