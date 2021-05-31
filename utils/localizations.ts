export enum DealType {
  free = "Свободная продажа",
  alternative = "Альтернатива",
  assignemt = "Переуступка",
}

export enum BathType {
  separated = "Раздельный",
  combined = "Совмещённый",
  multiple = "Больше одного",
}

export enum RoomsType {
  passing = "Проходные",
  separated = "Раздельные",
  combined = "Смежно-раздельные",
}

export enum WindowsType {
  street = "На улицу",
  yard = "Во двор",
  bothSides = "В обе стороны",
}

export enum State {
  redecorationRequired = "Требуется ремонт",
  redecorated = "Косметический ремонт",
  good = "Хорошее",
  excellent = "Отличное",
}

export enum PlateType {
  gas = "Газовая",
  electric = "Электрическая",
}

export enum BuildingType {
  livingFund = "Жилой фонд",
  apartment = "Апартаменты",
}

export enum MaterialType {
  brick = "Кирпич",
  monolith = "Монолит",
  panel = "Панель",
  brickMonolith = "Кирпич-монолит",
}

export enum ApartmentType {
  flat = "Квартира",
  share = "Доля в кваритре",
  apartment = "Апартаменты",
}

export enum ParkingType {
  open = "Открытая",
  restricted = "Закрытая",
  underground = "Подземная",
}

export enum UrbAreas {
  railroad = "Железнодорожный",
  industrial = "Индустриальный",
  kirovskiy = "Кировский",
  redfleet = "Краснофлотский",
  central = "Центральный",
}

export enum SuburbAreas {
  west = "Западное | ЕАО",
  north = "Северное | Воронеж (1/2/3), Нагорное",
  east = "Восточное | Матвеевка, Сергеевка, Галкино",
  south = "Южное | Ильинка, Корсаково, Влад-ое Шоссе",
}

export enum RentType {
  sale = "Продать",
  longPeriodRent = "Сдать длительно",
  shortPeriodRent = "Сдать посуточно",
}

export enum EstateType {
  apartment = "Квартира",
  room = "Комната",
  house = "Дом",
  garage = "Гараж",
  commercial = "Коммерческая",
  land = "Участок",
}
