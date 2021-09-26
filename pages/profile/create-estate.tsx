import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import WithHeader from "components/layouts/WithHeader";
import Section from "components/common/Section";
import CretateEstateForm from "components/pages/create-estate/CreateEstateForm";

export default function CreateEstate() {
  return (
    <WithHeader headTitle="Создать объект">
      <Section heading="Создать объект">
        <CretateEstateForm />
      </Section>
    </WithHeader>
  );
}

export const getServerSideProps = withPageAuthRequired();
