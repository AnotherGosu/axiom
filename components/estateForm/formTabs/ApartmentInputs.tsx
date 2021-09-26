import { Wrap, WrapItem } from "@chakra-ui/react";
import NumberInput from "components/inputs/NumberInput";
import { SquareInput } from "components/inputs/CustomNumberInputs";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

export default function SquareInputs() {
  const { getValues, formState, clearErrors } = useFormContext();

  const inputs = [
    {
      id: "commonSquare",
      label: "Общая площадь",
      rules: {
        required: "Это обязательное поле",
        min: {
          value: getValues("livingSquare") + getValues("kitchenSquare"),
          message: "Значение меньше суммы площадей",
        },
      },
    },
    {
      id: "livingSquare",
      label: "Жилая площадь",
      rules: {
        max: {
          value: getValues("commonSquare"),
          message: "Значение больше общей площади",
        },
      },
    },
    {
      id: "kitchenSquare",
      label: "Площадь кухни",
      rules: {
        max: {
          value: getValues("livingSquare"),
          message: "Значение больше жилой площади",
        },
      },
    },
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
  ];

  useEffect(() => {
    if (
      formState.errors.commonSquare ||
      formState.errors.livingSquare ||
      formState.errors.kitchenSquare ||
      formState.errors.floor
    ) {
      const timer = setTimeout(() => {
        clearErrors(["commonSquare", "livingSquare", "kitchenSquare", "floor"]);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [formState]);

  return (
    <Wrap spacing="20px">
      {inputs.map((props) => (
        <WrapItem key={props.id}>
          {props.id.includes("Square") ? (
            <SquareInput {...props} />
          ) : (
            <NumberInput {...props} />
          )}
        </WrapItem>
      ))}
    </Wrap>
  );
}
