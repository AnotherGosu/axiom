import SearchResultsCardContent from "./SearchResultsCardContent";
import { EstateCard } from "utils/types/estate";
import EstateCardsList from "components/common/EstateCardsList";

interface Props {
  estates: EstateCard[];
}

export default function SearchResultsList({ estates }: Props) {
  return (
    <EstateCardsList
      estates={estates}
      CardContent={SearchResultsCardContent}
      templateColumns={{ base: "1fr", md: "repeat(auto-fit, 500px)" }}
    />
  );
}
