import { Box, Flex } from "@chakra-ui/react";
import Location from "components/common/Location";
import PublicationDate from "components/common/PublicationDate";

interface Props {
  address: string;
  createdAt: string;
}

export default function Header({ address, createdAt }: Props) {
  return (
    <Flex flexDir="column" gridGap="15px">
      <Location address={address} />
      <Box bg="whitesmoke" px="15px" py="5px">
        <PublicationDate createdAt={createdAt} />
      </Box>
    </Flex>
  );
}
