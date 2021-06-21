import { Container, TextItem, BooleanItem } from "./SummaryComponents";
import { Building } from "utils/types/estate";
import { BuildingType, MaterialType, ParkingType } from "utils/localizations";

export default function BuildingSummary({
  buildingType,
  builtYear,
  materialType,
  parkingType,
  isRestrictedArea,
  isElevator,
  isServiceElevator,
}: Building) {
  return (
    <Container>
      <TextItem title="Тип недвижимости" text={BuildingType[buildingType]} />
      <TextItem title="Год постройки" text={builtYear} />
      <TextItem title="Материал стен" text={MaterialType[materialType]} />
      <TextItem title="Тип парковки" text={ParkingType[parkingType]} />
      <BooleanItem title="Закрытая территория" value={isRestrictedArea} />
      <BooleanItem title="Лифт" value={isElevator} />
      <BooleanItem title="Грузовой лифт" value={isServiceElevator} />
    </Container>
  );
}
