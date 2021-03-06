import { SimpleGrid, VStack } from "@chakra-ui/react";
import { TextItem, SquareItem, BooleanItem } from "./SummaryItems";
import { Apartment } from "utils/types/estate";
import {
  Rooms,
  State,
  RoomsType,
  WindowsType,
  BathType,
  ApartmentStatus,
  Balconies,
} from "utils/localizations";

export default function ApartmentSummary({
  rooms,
  commonSquare,
  livingSquare,
  kitchenSquare,
  floor,
  allFloors,
  balconies,
  state,
  apartmentStatus,
  roomsType,
  windowsType,
  bathType,
  isKitchenFurniture,
  isRoomsFurniture,
  isRemodeled,
}: Apartment) {
  return (
    <SimpleGrid columns={[1, 1, 2]} spacingX="50px">
      <VStack maxW="325px">
        <TextItem title="Количетсво комнат" text={Rooms[rooms]} />
        <TextItem
          title="Этаж / Этажность"
          text={
            floor || allFloors
              ? `${floor ? floor : "—"} / ${allFloors ? allFloors : "—"}`
              : "—"
          }
        />
        <SquareItem title="Общая площадь" square={commonSquare} />
        <SquareItem title="Жилая площадь" square={livingSquare} />
        <SquareItem title="Кухня" square={kitchenSquare} />
        <TextItem title="Санузел" text={BathType[bathType]} />
        <TextItem title="Балкон/лоджия" text={Balconies[balconies]} />
      </VStack>

      <VStack maxW="325px">
        <TextItem title="Состояние" text={State[state]} />
        <TextItem title="Тип комнат" text={RoomsType[roomsType]} />
        <TextItem title="Вид из окна" text={WindowsType[windowsType]} />
        <TextItem title="Статус" text={ApartmentStatus[apartmentStatus]} />
        <BooleanItem title="Мебель в комнатах" value={isRoomsFurniture} />
        <BooleanItem title="Кухонный гарнитур" value={isKitchenFurniture} />
        <BooleanItem title="Перепланировка" value={isRemodeled} />
      </VStack>
    </SimpleGrid>
  );
}
