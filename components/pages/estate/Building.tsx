import { SimpleGrid, VStack } from "@chakra-ui/react";
import { TextItem, BooleanItem } from "./SummaryItems";
import { Building } from "utils/types/estate";
import {
  MaterialType,
  ParkingType,
  PlateType,
  CeilingType,
} from "utils/localizations";

export default function BuildingSummary({
  builtYear,
  materialType,
  ceilingHeight,
  ceilingType,
  parkingType,
  plateType,
  isElevator,
  isServiceElevator,
}: Building) {
  return (
    <SimpleGrid columns={[1, 1, 2]} spacingX="50px">
      <VStack maxW="325px">
        <TextItem title="Год постройки" text={builtYear} />
        <TextItem title="Высота потолков" text={ceilingHeight} />
        <TextItem title="Материал стен" text={MaterialType[materialType]} />
        <TextItem title="Перекрытия" text={CeilingType[ceilingType]} />
      </VStack>

      <VStack maxW="325px">
        <TextItem title="Парковка" text={ParkingType[parkingType]} />
        <TextItem title="Плита" text={PlateType[plateType]} />
        <BooleanItem title="Лифт" value={isElevator} />
        <BooleanItem title="Грузовой лифт" value={isServiceElevator} />
      </VStack>
    </SimpleGrid>
  );
}
