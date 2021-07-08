import { TextItem, SquareItem, BooleanItem } from "./SummaryItems";
import { Apartment } from "utils/types/estate";
import {
  Rooms,
  State,
  RoomsType,
  WindowsType,
  PlateType,
  BathType,
  ApartmentStatus,
} from "utils/localizations";

export default function ApartmentSummary({
  rooms,
  commonSquare,
  livingSquare,
  kitchenSquare,
  floor,
  allFloors,
  balconies,
  loggias,
  state,
  apartmentStatus,
  roomsType,
  windowsType,
  plateType,
  bathType,
  isKitchenFurniture,
  isRoomsFurniture,
}: Apartment) {
  return (
    <>
      <TextItem title="Комнаты" text={Rooms[rooms]} />
      <SquareItem title="Площадь" square={commonSquare} />
      <SquareItem title="Жилая" square={livingSquare} />
      <SquareItem title="Кухня" square={kitchenSquare} />
      <TextItem
        title="Этаж"
        text={
          floor || allFloors
            ? `${floor ? floor : "—"} из ${allFloors ? allFloors : "—"}`
            : "—"
        }
      />
      <TextItem title="Статус" text={ApartmentStatus[apartmentStatus]} />
      <TextItem title="Балконы" text={balconies} />
      <TextItem title="Лоджии" text={loggias} />
      <TextItem title="Состояние" text={State[state]} />
      <TextItem title="Тип комнат" text={RoomsType[roomsType]} />
      <TextItem title="Вид из окон" text={WindowsType[windowsType]} />
      <TextItem title="Плита" text={PlateType[plateType]} />
      <TextItem title="Санузел" text={BathType[bathType]} />
      <BooleanItem title="Кухонный гарнитур" value={isKitchenFurniture} />
      <BooleanItem title="Мебель в комнатах" value={isRoomsFurniture} />
    </>
  );
}
