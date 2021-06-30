import EstateCardsList from "components/common/EstateCardsList";
import MyEstatesCardContent from "./MyEstatesCardContent";
import { EstateCard } from "utils/types/estate";

interface Props {
  estates: EstateCard[];
}

export default function MyEstatesList({ estates }: Props) {
  return (
    <EstateCardsList
      templateColumns="repeat(auto-fit, minmax(300px, 400px))"
      estates={estates}
      CardContent={MyEstatesCardContent}
    />
  );
}
