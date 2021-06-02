import { Wrap, WrapItem } from "@chakra-ui/react";
import NumberInput from "components/common/inputs/NumberInput";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

const ApartmentInputs: React.FC = () => {
  const {
    control,
    watch,
    setError,
    formState: { errors },
    clearErrors,
  } = useFormContext();

  const floor = +watch("floor");
  const allFloors = +watch("allFloors");
  const error = errors?.allFloors?.message;

  useEffect(() => {
    if (floor && allFloors && floor > allFloors) {
      setError("allFloors", {
        type: "min",
        message: "Значение слишком мало",
      });
    } else if (error) {
      clearErrors("allFloors");
    }
  }, [floor, allFloors, error, setError]);

  return (
    <Wrap spacing="20px">
      {inputs.map((props) => (
        <WrapItem key={props.id}>
          <NumberInput control={control} isInteger {...props} />
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default ApartmentInputs;

const inputs = [
  { id: "floor", label: "Этаж" },
  { id: "allFloors", label: "Всего этажей" },
  { id: "balconies", label: "Количесво балконов" },
  { id: "loggias", label: "Количество лоджий" },
];
