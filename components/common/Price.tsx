import { Text, Divider, Box, BoxProps } from "@chakra-ui/react";

interface Props {
  price: number;
  commonSquare: number;
  priceFontSize?: BoxProps["fontSize"];
  squarePriceFontSize?: BoxProps["fontSize"];
}

const EstateCardPrice: React.FC<Props> = ({
  price,
  commonSquare,
  priceFontSize,
  squarePriceFontSize,
}) => {
  const squarePrice = Math.floor(price / commonSquare);
  const formatedPrice = new Intl.NumberFormat("ru-RU").format(price);
  const formatedSquarePrice = new Intl.NumberFormat("ru-RU").format(
    squarePrice
  );
  return (
    <Box w="max-content">
      <Text
        fontWeight="bold"
        fontSize={priceFontSize}
      >{`${formatedPrice} ₽`}</Text>
      <Divider borderColor="blackAlpha.700" />
      <Text fontSize={squarePriceFontSize}>
        {`${formatedSquarePrice} ₽/м`}
        <sup>2</sup>
      </Text>
    </Box>
  );
};

export default EstateCardPrice;