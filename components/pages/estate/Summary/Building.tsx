import { TextItem, BooleanItem } from "./SummaryItems";
import { Building } from "utils/types/estate";
import { MaterialType, ParkingType } from "utils/localizations";

export default function BuildingSummary({
  builtYear,
  materialType,
  parkingType,
  isElevator,
  isServiceElevator,
}: Building) {
  return (
    <>
      <TextItem title="Год постройки" text={builtYear} />
      <TextItem title="Материал стен" text={MaterialType[materialType]} />
      <TextItem title="Парковка" text={ParkingType[parkingType]} />
      <BooleanItem title="Лифт" value={isElevator} />
      <BooleanItem title="Грузовой лифт" value={isServiceElevator} />
    </>
  );
}
