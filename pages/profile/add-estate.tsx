import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import WithHeader from "components/layouts/WithHeader";
import Section from "components/common/Section";
import AddEstateForm from "components/pages/add-estate/AddEstateForm";

export default function AddEstate() {
  return (
    <WithHeader headTitle="Добавить объект">
      <Section heading="Добавить объект">
        <AddEstateForm />
      </Section>
    </WithHeader>
  );
}

export const getServerSideProps = withPageAuthRequired();
