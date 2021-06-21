import { Text, TextProps } from "@chakra-ui/react";

interface Props extends TextProps {
  price: number;
}

export default function EstateCardPrice({ price, ...rest }: Props) {
  const formatedPrice = new Intl.NumberFormat("ru-RU").format(price);
  return <Text {...rest}>{`${formatedPrice} ₽`}</Text>;
}
