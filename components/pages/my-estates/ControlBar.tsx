import { Flex } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import SortMenu from "components/common/SortMenu";
import IconButtonLink from "components/common/ButtonLink";

interface Props {
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
}

export default function ControlBar({ sort, setSort }: Props) {
  return (
    <Flex gridGap="20px" mb="30px" flexWrap="wrap">
      <SortMenu sort={sort} setSort={setSort} />
      <IconButtonLink
        href="/profile/add-estate"
        aria-label="Добавить новый объект"
        leftIcon={<AddIcon />}
      >
        Добавить
      </IconButtonLink>
    </Flex>
  );
}
