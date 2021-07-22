import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import PageLayout from "components/layouts/PageLayout";
import Section from "components/common/Section";
import AddEstateForm from "components/pages/add-estate/AddEstateForm";

export default function AddEstate() {
  return (
    <PageLayout headTitle="Добавить">
      <Section heading="Добавить объект">
        <AddEstateForm />
      </Section>
    </PageLayout>
  );
}

export const getServerSideProps = withPageAuthRequired();
