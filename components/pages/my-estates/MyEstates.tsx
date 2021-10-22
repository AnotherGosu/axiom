import { Box } from "@chakra-ui/react";
import ControlBar from "./ControlBar";
import MyEstatesList from "./MyEstatesList";
import { EstateCard } from "utils/types/estate";
import { useState } from "react";
import useSWR from "swr";
import getUserEstates from "utils/cms/queries/getUserEstates";
import { useUser } from "@auth0/nextjs-auth0";

interface Props {
  initialEstates: EstateCard[];
}

const fetcher = async (key: string, sub: string, sort: any) => {
  const estates = await getUserEstates({
    sub,
    sort,
  });
  return estates;
};

export default function MyEstates({ initialEstates }: Props) {
  const [sort, setSort] = useState("created_at_dec");
  const {
    user: { sub },
  } = useUser();

  const {
    data: estates,
    error,
    isValidating,
    mutate,
  } = useSWR(["myEstates", sub, sort], fetcher, {
    initialData: initialEstates,
  });
  if (error) console.log(error);

  return (
    <Box>
      <ControlBar sort={sort} setSort={setSort} />
      <MyEstatesList
        estates={estates}
        isValidating={isValidating}
        mutate={mutate}
      />
    </Box>
  );
}
