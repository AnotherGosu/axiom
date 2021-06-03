import { Wrap, WrapItem } from "@chakra-ui/react";
import NumberInput from "components/common/inputs/NumberInput";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

const SquareInputs: React.FC = () => {
  const {
    control,
    watch,
    setError,
    formState: { errors },
    clearErrors,
  } = useFormContext();

  const commonSquare = +watch("commonSquare");
  const livingSquare = +watch("livingSquare");
  const kitchenSquare = +watch("kitchenSquare");
  const livingSquareError = errors?.livingSquare?.message;
  const kitchenSquareError = errors?.kitchenSquare?.message;

  useEffect(() => {
    if (commonSquare < livingSquare) {
      setError("livingSquare", {
        type: "max",
        message: "Значение больше общей площади",
      });
    } else if (livingSquareError && commonSquare > livingSquare) {
      clearErrors("livingSquare");
    }

    if (livingSquare < kitchenSquare) {
      setError("kitchenSquare", {
        type: "max",
        message: "Значение больше жилой площади",
      });
    } else if (kitchenSquareError && livingSquare > kitchenSquare) {
      clearErrors("kitchenSquare");
    }
  }, [
    commonSquare,
    livingSquare,
    kitchenSquare,
    livingSquareError,
    kitchenSquareError,
    setError,
    clearErrors,
  ]);

  return (
    <Wrap spacing="20px">
      {inputs.map((props) => (
        <WrapItem key={props.id}>
          <NumberInput
            control={control}
            rightChildren={
              <span>
                м<sup>2</sup>
              </span>
            }
            {...props}
          />
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default SquareInputs;

const inputs = [
  { id: "commonSquare", label: "Общая площадь", isRequired: true },
  { id: "livingSquare", label: "Жилая площадь", isRequired: false },
  { id: "kitchenSquare", label: "Площадь кухни", isRequired: false },
];
