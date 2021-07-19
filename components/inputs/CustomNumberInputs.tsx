import NumberInput, { Props } from "./NumberInput";

export function PhoneInput(props: Props) {
  return <NumberInput format="+7 (###) ###-##-##" isStringValue {...props} />;
}

export function YearInput(props: Props) {
  return <NumberInput rightChildren="г." format="####" {...props} />;
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
