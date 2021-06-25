import SelectMenu from "../inputs/SelectMenu";
import { rentTypeOptions } from "utils/constants";
import { IoKey, IoCalendarOutline, IoTimeOutline } from "react-icons/io5";

export default function RentTypeSelectMenu() {
  return (
    <SelectMenu
      id="rentType"
      label="Тип сделки"
      menuItems={rentTypeMenuItems}
    />
  );
}

const rentTypeIcons = [IoKey, IoCalendarOutline, IoTimeOutline];

const rentTypeMenuItems = rentTypeOptions.map((option, idx) => ({
  icon: rentTypeIcons[idx],
  value: option[0],
  label: option[1],
}));
