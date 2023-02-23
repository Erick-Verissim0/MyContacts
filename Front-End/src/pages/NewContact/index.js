import PageHeader from '../../Components/PageHeader';
import ContactForm from '../../Components/ContactForm';

export default function NewContact() {
  return (
    <>
      <PageHeader title="New Contact" />

      <ContactForm buttonLabel="Register" />
    </>
  );
}
