import { Box } from "@chakra-ui/react";
import ControlBar from "./ControlBar";
import MyEstatesList from "./MyEstatesList";
import { EstateCard } from "utils/types/estate";
import { useState } from "react";
import useSWR from "swr";
import { getMyEstates } from "utils/cms/estate/requests";

interface Props {
  issuer: string;
  initialEstates: EstateCard[];
}

const fetcher = async (key: string, issuer: string, orderBy: string) => {
  const estates = await getMyEstates({ issuer, orderBy });
  return estates;
};

export default function MyEstates({ initialEstates, issuer }: Props) {
  const [orderBy, setOrderBy] = useState("createdAt_DESC");

  const {
    data: estates,
    error,
    isValidating,
    mutate,
  } = useSWR(["myEstates", issuer, orderBy], fetcher, {
    initialData: initialEstates,
  });
  if (error) console.log(error);

  return (
    <Box>
      <ControlBar orderBy={orderBy} setOrderBy={setOrderBy} />
      <MyEstatesList
        estates={estates}
        isValidating={isValidating}
        mutate={mutate}
      />
    </Box>
  );
}
