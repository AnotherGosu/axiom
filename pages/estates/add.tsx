import Head from "components/common/Head";
import Section from "components/common/Section";
import CreateEstateForm from "components/add/CreateEstateForm";

const Add: React.FC = () => {
  return (
    <>
      <Head title="Axiom • Добавить объект" />
      <Section headingTitle="Добавить новый объект">
        <CreateEstateForm />
      </Section>
    </>
  );
};

export default Add;
