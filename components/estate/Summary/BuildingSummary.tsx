import { Container, TextItem, BooleanItem } from "./SummaryComponents";
import { Building } from "utils/types";
import { BuildingType, MaterialType, ParkingType } from "utils/localizations";

interface Props {
  building: Building;
}

const BuildingSummary: React.FC<Props> = ({ building }) => {
  const {
    buildingType,
    builtYear,
    materialType,
    parkingType,
    isRestrictedArea,
    isElevator,
    isServiceElevator,
  } = building;

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
};

export default BuildingSummary;
