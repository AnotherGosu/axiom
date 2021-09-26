import RadioCards from "../inputs/RadioCards";
import { transactionTypeOptions } from "utils/constants/options";
import { IoKey, IoCalendarOutline, IoTimeOutline } from "react-icons/io5";

export default function TransactionTypeRadio() {
  return (
    <RadioCards
      id="transactionType"
      label="Тип сделки"
      options={transactionTypeRadioOptions}
      isHiddenLabel
    />
  );
}

const transactionTypeIcons = [IoKey, IoCalendarOutline, IoTimeOutline];

const transactionTypeRadioOptions = transactionTypeOptions.map(
  (option, idx) => ({
    icon: transactionTypeIcons[idx],
    value: option[0],
    label: option[1],
  })
);
