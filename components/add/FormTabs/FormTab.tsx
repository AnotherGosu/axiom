import { Box, VStack, HStack, Button } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { useFormContext } from "react-hook-form";

interface Props {
  scrollToTabs: () => void;
  tabIndex: number;
  setTabIndex: Dispatch<SetStateAction<number>>;
}

const FormTab: React.FC<Props> = ({
  tabIndex,
  setTabIndex,
  scrollToTabs,
  children,
}) => {
  const nextTab = () => {
    setTabIndex(tabIndex + 1);
    scrollToTabs();
  };
  const prevTab = () => {
    setTabIndex(tabIndex - 1);
    scrollToTabs();
  };

  const {
    watch,
    formState: { isDirty, isValid, isSubmitting },
  } = useFormContext();

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
