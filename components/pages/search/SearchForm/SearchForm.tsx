import { Box, useDisclosure, Collapse, Button } from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";
import Searchbar from "./Searchbar";
import Filters from "./Filters";
import { useForm, FormProvider } from "react-hook-form";
import type { SearchForm as SearchFormData } from "utils/types/forms";
import { useRouter } from "next/router";
import { useQueryValues, defaultValues } from "./useQueryValues";

interface Props {
  scrollToSearchResult: () => void;
}

export default function SearchForm({ scrollToSearchResult }: Props) {
  const { isOpen, onToggle } = useDisclosure();

  const { push } = useRouter();

  const form = useForm({ defaultValues });
  const { handleSubmit, reset } = form;

  const onSubmit = async (data: SearchFormData) => {
    const filterQuery = new URLSearchParams();
    const dataEntries = Object.entries(data);
    dataEntries.forEach(([key, value]) => {
      if (value && value?.length !== 0) {
        filterQuery.append(key, value.toString());
      }
    });
    push(`search/?${filterQuery.toString()}`, undefined, { shallow: true });
    scrollToSearchResult();
  };

  useQueryValues(reset);

  return (
    <FormProvider {...form}>
      <Box
        as="form"
        p="20px"
        borderWidth="1px"
        borderRadius="md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Searchbar onToggle={onToggle} />
        <Collapse in={isOpen} animateOpacity>
          <Filters />
          <Button
            display="block"
            ml="auto"
            mt="50px"
            leftIcon={<RepeatIcon />}
            variant="outline"
            onClick={() => {
              reset(defaultValues);
            }}
          >
            Очистить
          </Button>
        </Collapse>
      </Box>
    </FormProvider>
  );
}
