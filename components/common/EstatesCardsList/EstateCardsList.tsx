import { Grid, GridProps } from "@chakra-ui/react";
import EmptyListAlert from "./EmptyListAlert";

interface Props extends GridProps {
  listLength: number;
  emptyListText: string;
  children?: React.ReactNode;
}

export default function EstateCardsList({
  listLength,
  emptyListText,
  children,
  ...rest
}: Props) {
  if (listLength === undefined) {
    return (
      <EmptyListAlert emptyListText="Возникла ошибка загрузки данных. Попробуйте обновить страницу." />
    );
  }

  if (listLength === 0 || listLength === undefined) {
    return <EmptyListAlert emptyListText={emptyListText} />;
  }

  return (
    <Grid
      templateColumns={["1fr", "repeat(auto-fit, 400px)"]}
      gridGap="30px"
      {...rest}
    >
      {children}
    </Grid>
  );
}
