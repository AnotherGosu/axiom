import EstateCardsList from "components/common/EstatesCardsList/EstateCardsList";
import EstateCard from "components/common/EstateCard";
import MyEstatesCardMenu from "./MyEstatesCardMenu";
import { EstateCard as EstateCardProps } from "utils/types/estate";

interface Props {
  estates: EstateCardProps[];
  isValidating: boolean;
  mutate: any;
}

export default function MyEstatesList({
  estates,
  isValidating,
  mutate,
}: Props) {
  return (
    <EstateCardsList
      listLength={estates?.length}
      emptyListText="У Вас нет добавленных объектов."
    >
      {estates.map((estate) => (
        <EstateCard key={estate.id} isLoading={isValidating} {...estate}>
          <MyEstatesCardMenu id={estate.id} mutate={mutate} />
        </EstateCard>
      ))}
    </EstateCardsList>
  );
}
