import NumberInput, { Props } from "./NumberInput";

export function PhoneInput(props: Props) {
  return <NumberInput {...props} format="+7 (###) ###-##-##" isStringValue />;
}

export function YearInput(props: Props) {
  return <NumberInput {...props} rightChildren="г." format="####" />;
}

export function PriceInput(props: Props) {
  return <NumberInput {...props} rightChildren="₽" thousandSeparator />;
}

export function SquareInput(props: Props) {
  return (
    <NumberInput
      {...props}
      rightChildren={
        <span>
          м<sup>2</sup>
        </span>
      }
    />
  );
}
