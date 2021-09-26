import RadioCards from "../inputs/RadioCards";
import { estateTypeOptions } from "utils/constants/options";
import { BsBuilding, BsPersonFill, BsPeopleFill } from "react-icons/bs";
import { FaCar } from "react-icons/fa";
import { GiHouse, GiFruitTree, GiBarbecue } from "react-icons/gi";
import { IoStorefrontOutline } from "react-icons/io5";

export default function EstateTypeRadio() {
  return (
    <RadioCards
      id="estateType"
      label="Тип объекта"
      options={estateTypeRadioOptions}
      isHiddenLabel
    />
  );
}

const estateTypeIcons = [
  BsPeopleFill,
  BsPersonFill,
  GiHouse,
  IoStorefrontOutline,
  GiFruitTree,
  GiBarbecue,
  FaCar,
  BsBuilding,
];

const estateTypeRadioOptions = estateTypeOptions.map((option, idx) => {
  const [value, label] = option;
  const icon = estateTypeIcons[idx];
  return { value, label, icon };
});
