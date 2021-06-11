import {
  Box,
  Wrap,
  WrapItem,
  VStack,
  HStack,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { createEstate } from "utils/cms";
import { CreateEstateFormFields } from "utils/types";

interface Props {
  tabIndex: number;
  maxTabIndex: number;
  switchToErrorTab: (errors) => void;
  nextTab: () => void;
  prevTab: () => void;
}

const FormTab: React.FC<Props> = ({
  tabIndex,
  switchToErrorTab,
  maxTabIndex,
  nextTab,
  prevTab,
  children,
}) => {
  const { formState, handleSubmit } = useFormContext();
  const toast = useToast();

  const onSubmit = async (data: CreateEstateFormFields) => {
    toast({
      isClosable: false,
      duration: null,
      status: "info",
      title: "Добавляем объект...",
    });

    try {
      const res = await createEstate(data);

      toast.closeAll();
      toast({
        isClosable: true,
        duration: 10000,
        status: "success",
        title: "Объект успешно добавлен",
      });
    } catch (err) {
      console.error(err);

      toast.closeAll();
      toast({
        isClosable: true,
        duration: 5000,
        status: "error",
        title: "Возникла ошибка",
      });
    }
  };

  const onError = (errors) => {
    switchToErrorTab(errors);
  };

  return (
    <Box p="30px" borderWidth="1px" borderRadius="md" borderTopRadius={0}>
      <VStack spacing="50px" align="flex-start">
        {children}
        <Wrap>
          {tabIndex !== 0 && (
            <WrapItem>
              <Button variant="outline" onClick={prevTab}>
                Назад
              </Button>
            </WrapItem>
          )}
          {tabIndex !== 4 && (
            <WrapItem>
              <Button variant="outline" onClick={nextTab}>
                Далее
              </Button>
            </WrapItem>
          )}
          <WrapItem>
            <Button
              onClick={handleSubmit(onSubmit, onError)}
              isDisabled={maxTabIndex !== 4}
              isLoading={formState.isSubmitting}
            >
              Добавить объект
            </Button>
          </WrapItem>
        </Wrap>
      </VStack>
    </Box>
  );
};

export default FormTab;
