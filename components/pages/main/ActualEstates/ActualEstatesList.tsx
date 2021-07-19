import EstateCardsList from "components/common/EstatesCardsList/EstateCardsList";
import EstateCard from "components/common/EstateCard";
import type { EstateCard as EstateCardProps } from "utils/types/estate";

interface Props {
  estates: EstateCardProps[];
}

export default function ActualEstatesList({ estates }: Props) {
  return (
    <EstateCardsList
      listLength={estates.length}
      emptyListText="Актуальные предложения отсутствуют"
    >
      {estates.map((estate) => (
        <EstateCard key={estate.id} isLoading={false} {...estate} />
      ))}
    </EstateCardsList>
  );
}
