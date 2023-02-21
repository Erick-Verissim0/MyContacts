import PageHeader from '../../Components/PageHeader';
import ContactForm from '../../Components/ContactForm';

export default function EditContact() {
  return (
    <>
      <PageHeader title="New Contact" />
      <ContactForm buttonLabel="Save editions" />
    </>
  );
}
