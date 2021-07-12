import { Button, VStack } from "@chakra-ui/react";
import PageLayout from "components/layouts/PageLayout";
import Section from "components/common/Section";
import CheckboxMenu from "components/inputs/CheckboxMenu";
import Switch from "components/inputs/Switch";
import NumberInput from "components/inputs/NumberInput";
import { roomsOptions } from "utils/constants";
import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

interface Data {
  price: number;
  rooms: string[];
  isBarg: boolean;
}

export default function Test() {
  const { push, query } = useRouter();

  const form = useForm({
    defaultValues: useMemo(
      () => ({
        price: Number(query?.price) || null,
        rooms: query?.rooms?.toString().split(",") || [],
        isBarg: Boolean(query?.isBarg) || false,
      }),
      [query]
    ),
  });

  // const defaultValues = {
  //   price: Number(query?.price) || null,
  //   rooms: query?.rooms?.toString().split(",") || [],
  //   isBarg: Boolean(query?.isBarg) || false,
  // };
  // const { handleSubmit, reset, register, setValue, getValues } = form;

  const onSubmit = async (data: Data) => {
    const filterQuery = new URLSearchParams();
    const dataEntries = Object.entries(data);
    dataEntries.forEach(([key, value]) => {
      if (value && value?.length !== 0) {
        filterQuery.append(key, value.toString());
      }
    });
    push(`test/?${filterQuery.toString()}`, undefined, { shallow: true });
  };

  useEffect(() => {
    form.reset({
      price: Number(query?.price) || null,
      rooms: query?.rooms?.toString().split(",") || [],
      isBarg: Boolean(query?.isBarg) || false,
    });
  }, [query]);

  return (
    <PageLayout headTitle="Тест">
      <Section heading="Тест">
        {/* <FormProvider {...form}> */}
        <VStack as="form" onSubmit={form.handleSubmit(onSubmit)}>
          <NumberInput id="price" label="Цена" control={form.control} />
          <CheckboxMenu
            id="rooms"
            label="Комнаты"
            options={roomsOptions}
            control={form.control}
          />
          <Switch id="isBarg" label="Торг" control={form.control} />
          <Button type="submit">Найти</Button>
          <Button type="reset">Очистить</Button>
        </VStack>
        {/* </FormProvider> */}
      </Section>
    </PageLayout>
  );
}
