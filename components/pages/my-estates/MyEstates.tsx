import { Box } from "@chakra-ui/react";
import ControlBar from "./ControlBar";
import MyEstatesList from "./MyEstatesList";
import { EstateCard } from "utils/types/estate";
import { useState } from "react";
import useSWR from "swr";
import { getMyEstates } from "utils/cms/estate/requests";
import { useUser } from "@auth0/nextjs-auth0";

interface Props {
  initialEstates: EstateCard[];
}

const fetcher = async (key: string, sub: string, orderBy: string) => {
  const estates = await getMyEstates({ sub, orderBy });
  return estates;
};

export default function MyEstates({ initialEstates }: Props) {
  const [orderBy, setOrderBy] = useState("createdAt_DESC");
  const {
    user: { sub },
  } = useUser();

  const {
    data: estates,
    error,
    isValidating,
    mutate,
  } = useSWR(["myEstates", sub, orderBy], fetcher, {
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
