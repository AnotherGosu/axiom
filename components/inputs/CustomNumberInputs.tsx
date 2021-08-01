import NumberInput, { Props } from "./NumberInput";

export function PhoneInput(props: Props) {
  return (
    <NumberInput
      format="8 (###) ###-##-##"
      isStringValue
      rules={{
        pattern: {
          value: /8 \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}/,
          message: "Введите 11-значный номер",
        },
      }}
      {...props}
    />
  );
}

export function YearInput(props: Props) {
  return (
    <NumberInput
      rightChildren="г."
      format="####"
      rules={{ min: { value: 1000, message: "Введиет 4-значное число" } }}
      {...props}
    />
  );
}

export function PriceInput(props: Props) {
  return <NumberInput rightChildren="₽" thousandSeparator {...props} />;
}

export function SquareInput(props: Props) {
  return (
    <NumberInput
      rightChildren={
        <span>
          м<sup>2</sup>
        </span>
      }
      {...props}
    />
  );
}
