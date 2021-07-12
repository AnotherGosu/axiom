import EstateCardsList from "components/common/EstateCardsList";
import ActualCardContent from "./ActualCardContent";
import type { EstateCard } from "utils/types/estate";

interface Props {
  estates: EstateCard[];
}

export default function ActualEstatesList({ estates }: Props) {
  return <EstateCardsList estates={estates} CardContent={ActualCardContent} />;
}
