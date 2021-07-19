import EstateCardsList from "components/common/EstatesCardsList/EstateCardsList";
import EstateCard from "components/common/EstateCard";
import { EstateCard as EstateCardProps } from "utils/types/estate";

interface Props {
  estates: EstateCardProps[];
  isValidating: boolean;
}

export default function SearchResultsList({ estates, isValidating }: Props) {
  return (
    <EstateCardsList
      listLength={estates?.length}
      emptyListText="Не удалось найти объекты, отвечающие заданным параметрам поиска."
    >
      {estates.map((estate) => (
        <EstateCard key={estate.id} isLoading={isValidating} {...estate} />
      ))}
    </EstateCardsList>
  );
}
