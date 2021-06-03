import { Grid as ChakraGrid } from "@chakra-ui/react";

interface Props {
  columns: number;
}

const Grid: React.FC<Props> = ({ columns, children }) => {
  return (
    <ChakraGrid gridTemplateColumns={`repeat(${columns}, 1fr)`} gridGap="15px">
      {children}
    </ChakraGrid>
  );
};

export default Grid;
