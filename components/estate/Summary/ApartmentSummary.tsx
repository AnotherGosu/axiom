import {
  Container,
  TextItem,
  SquareItem,
  BooleanItem,
} from "./SummaryComponents";
import { Apartment } from "utils/types";
import {
  State,
  RoomsType,
  WindowsType,
  PlateType,
  BathType,
} from "utils/localizations";

interface Props {
  apartment: Apartment;
}

const ApartmentSummary: React.FC<Props> = ({ apartment }) => {
  const {
    rooms,
    commonSquare,
    livingSquare,
    kitchenSquare,
    floor,
    allFloors,
    balconies,
    loggias,
    state,
    roomsType,
    windowsType,
    plateType,
    bathType,
    isKitchenFurniture,
    isRoomsFurniture,
  } = apartment;

  return (
    <Container>
      <TextItem title="Комнат" text={rooms} />
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

      <TextItem title="Балконы" text={balconies} />
      <TextItem title="Лоджии" text={loggias} />
      <TextItem title="Состояние" text={State[state]} />
      <TextItem title="Тип комнат" text={RoomsType[roomsType]} />

      <TextItem title="Окна" text={WindowsType[windowsType]} />
      <TextItem title="Плита" text={PlateType[plateType]} />
      <TextItem title="Санузел" text={BathType[bathType]} />
      <BooleanItem title="Кухонный гарнитур" value={isKitchenFurniture} />
      <BooleanItem title="Мебель в комнатах" value={isRoomsFurniture} />
    </Container>
  );
};

export default ApartmentSummary;