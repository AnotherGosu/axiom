import { Wrap, WrapItem } from "@chakra-ui/react";
import NumberInput from "components/inputs/NumberInput";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

export default function ApartmentInputs() {
  const { getValues, formState, clearErrors } = useFormContext();

  const inputs = [
    {
      id: "floor",
      label: "Этаж",
      rules: {
        max: {
          value: getValues("allFloors"),
          message: "Значение больше количества этажей",
        },
      },
    },
    { id: "allFloors", label: "Всего этажей" },
    { id: "balconies", label: "Количество балконов" },
    { id: "loggias", label: "Количество лоджий" },
  ];

  useEffect(() => {
    if (formState.errors.floor) {
      const timer = setTimeout(() => {
        clearErrors("floor");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [formState]);

  return (
    <Wrap spacing="20px">
      {inputs.map((props) => (
        <WrapItem key={props.id}>
          <NumberInput isInteger {...props} />
        </WrapItem>
      ))}
    </Wrap>
  );
}
