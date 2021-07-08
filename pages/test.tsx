import PageLayout from "components/layouts/PageLayout";
import Section from "components/common/Section";
import CheckboxMenu from "components/inputs/CheckboxMenu";
import { roomsOptions } from "utils/constants";
import { useForm } from "react-hook-form";

export default function Test() {
  const { control } = useForm();

  return (
    <PageLayout headTitle="Тест">
      <Section heading="Тест">
        <CheckboxMenu
          id="test"
          label="Комнаты"
          options={roomsOptions}
          control={control}
        />
      </Section>
    </PageLayout>
  );
}
