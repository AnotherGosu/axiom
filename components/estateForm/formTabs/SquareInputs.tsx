import { Wrap, WrapItem } from "@chakra-ui/react";
import { SquareInput } from "components/inputs/CustomNumberInputs";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

export default function SquareInputs() {
  const { control, getValues, formState, clearErrors } = useFormContext();

  const inputs = [
    {
      id: "commonSquare",
      label: "Общая площадь",
      isRequired: true,
      rules: {
        min: {
          value: getValues("livingSquare") + getValues("kitchenSquare"),
          message: "Значение меньше суммы площадей",
        },
      },
    },
    {
      id: "livingSquare",
      label: "Жилая площадь",
      isRequired: false,
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
      isRequired: false,
      rules: {
        max: {
          value: getValues("livingSquare"),
          message: "Значение больше жилой площади",
        },
      },
    },
  ];

  useEffect(() => {
    if (
      formState.errors.commonSquare ||
      formState.errors.livingSquare ||
      formState.errors.kitchenSquare
    ) {
      const timer = setTimeout(() => {
        clearErrors(["commonSquare", "livingSquare", "kitchenSquare"]);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [formState]);

  return (
    <Wrap spacing="20px">
      {inputs.map((props) => (
        <WrapItem key={props.id}>
          <SquareInput control={control} {...props} />
        </WrapItem>
      ))}
    </Wrap>
  );
}
