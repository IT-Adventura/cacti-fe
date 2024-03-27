import { Contacts } from '~/features/contacts';

export const Contact = () => {
  return (
    <section className="text-center md:text-right">
      <h3 className="mb-8 text-2xl/7 font-medium">Contact Us</h3>
      <Contacts className="md:flex md:flex-col md:items-end" />
    </section>
  );
};
