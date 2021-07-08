import EstateCardsList from "components/common/EstateCardsList";
import ActualCardContent from "./ActualCardContent";
import type { EstateCard } from "utils/types/estate";

interface Props {
  estates: EstateCard[];
}

export default function ActualEstatesList({ estates }: Props) {
  return (
    <EstateCardsList
      gridTemplateColumns={["1fr", null, "1fr 1fr", null, "repeat(4, 1fr)"]}
      estates={estates}
      CardContent={ActualCardContent}
    />
  );
}
