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
  const error = errors?.commonSquare?.message;

  useEffect(() => {
    if (commonSquare < livingSquare + kitchenSquare) {
      setError("commonSquare", {
        type: "min",
        message: "Значение слишком мало",
      });
    } else if (error) {
      clearErrors("commonSquare");
    }
  }, [commonSquare, livingSquare, kitchenSquare, error, setError]);

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
