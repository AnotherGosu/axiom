import { TextItem } from "./SummaryItems";
import { DealType, ApartmentType, RentType } from "utils/localizations";

interface Props {
  dealType: string;
  apartmentType: string;
  rentType: string;
}

export default function Deal({ dealType, apartmentType, rentType }: Props) {
  return (
    <>
      <TextItem title="Тип ренты" text={RentType[rentType]} />
      <TextItem title="Тип сделки" text={DealType[dealType]} />
      <TextItem title="Тип жилья" text={ApartmentType[apartmentType]} />
    </>
  );
}
