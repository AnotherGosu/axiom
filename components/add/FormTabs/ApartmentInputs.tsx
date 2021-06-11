import { Wrap, WrapItem } from "@chakra-ui/react";
import NumberInput from "components/common/inputs/NumberInput";
import { useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";

const ApartmentInputs: React.FC = () => {
  const { control, setError, formState, clearErrors } = useFormContext();
  const [floor, allFloors] = useWatch({ name: ["floor", "allFloors"] });

  useEffect(() => {
    if (!formState.errors.allFloors && allFloors && floor > allFloors) {
      setError("allFloors", {
        type: "min",
        message: "Значение слишком мало",
      });
    } else if (formState.errors.allFloors && floor <= allFloors) {
      clearErrors("allFloors");
    }
  }, [floor, allFloors, formState, setError, clearErrors]);

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
