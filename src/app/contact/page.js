import React from "react";
import Container from "../components/ui/Container";
import ContactInformation from "../components/contact/ContactInformation";
import ContactForm from "../components/contact/ContactForm";

const ContactPage = () => {
  return (
    <div>
      <ContactInformation />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
