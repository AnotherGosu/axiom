import { Flex } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import OrderByMenu from "components/common/OrderByMenu";
import IconButtonLink from "components/common/ButtonLink";

interface Props {
  orderBy: string;
  setOrderBy: React.Dispatch<React.SetStateAction<string>>;
}

export default function ControlBar({ orderBy, setOrderBy }: Props) {
  return (
    <Flex gridGap="20px" mb="30px" flexWrap="wrap">
      <OrderByMenu orderBy={orderBy} setOrderBy={setOrderBy} />
      <IconButtonLink
        href="/profile/create-estate"
        aria-label="Создать новый объект"
        leftIcon={<AddIcon />}
      >
        Создать
      </IconButtonLink>
    </Flex>
  );
}
