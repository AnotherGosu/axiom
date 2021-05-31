import { Box, VStack, HStack, Button } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { FormState, UseFormWatch } from "react-hook-form";
import { CreateEstateFormFields } from "utils/types";

interface Props {
  tabIndex: number;
  setTabIndex: Dispatch<SetStateAction<number>>;
  formState: FormState<CreateEstateFormFields>;
  watch: UseFormWatch<CreateEstateFormFields>;
}

const FormTab: React.FC<Props> = ({
  tabIndex,
  setTabIndex,
  formState,
  watch,
  children,
}) => {
  const nextTab = () => setTabIndex(tabIndex + 1);
  const prevTab = () => setTabIndex(tabIndex - 1);

  let isNextTab;

  switch (tabIndex) {
    case 0: {
      isNextTab = watch("address");
      break;
    }
    case 1: {
      isNextTab = watch("rooms") && watch("commonSquare");
      break;
    }
    case 2: {
      isNextTab = true;
      break;
    }
    case 3: {
      isNextTab = watch("dealType") && watch("price");
      break;
    }
  }

  const { isDirty, isValid, isSubmitting } = formState;

  return (
    <Box p="30px" borderWidth="1px" borderRadius="md" borderTopRadius={0}>
      <VStack spacing="50px" align="flex-start">
        {children}
        <HStack>
          {tabIndex !== 0 && (
            <Button variant="outline" onClick={prevTab}>
              Назад
            </Button>
          )}
          {tabIndex === 4 ? (
            <Button
              type="submit"
              isDisabled={!isDirty || !isValid}
              isLoading={isSubmitting}
            >
              Добавить
            </Button>
          ) : (
            <Button variant="outline" isDisabled={!isNextTab} onClick={nextTab}>
              Далее
            </Button>
          )}
        </HStack>
      </VStack>
    </Box>
  );
};

export default FormTab;
