import RadioCards from "../inputs/RadioCards";
import { estateTypeOptions } from "utils/constants";
import { BsBuilding } from "react-icons/bs";
import { IoIosBed } from "react-icons/io";
import { GiHouse, GiHomeGarage } from "react-icons/gi";
import { FaMapSigns } from "react-icons/fa";
import { IoStorefrontOutline } from "react-icons/io5";

export default function EstateTypeSelectMenu() {
  return <RadioCards id="estateType" options={estateTypeMenuOptions} />;
}

const estateTypeIcons = [
  BsBuilding,
  IoIosBed,
  GiHouse,
  GiHomeGarage,
  IoStorefrontOutline,
  FaMapSigns,
];

const estateTypeMenuOptions = estateTypeOptions.map((option, idx) => {
  const [value, label] = option;
  const icon = estateTypeIcons[idx];
  return { value, label, icon };
});
