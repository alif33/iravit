import React from "react";
import Container from "../ui/Container";
import ContactCard from "./ContactCard";
import { TbMailFilled } from "react-icons/tb";
import emailIcon from "../../../assets/contact/email.png";
import phoneIcon from "../../../assets/contact/Icon.png";

const ContactInformation = () => {
  return (
    <div className="my-32">
      <Container>
        <div className="flex flex-row ">
          <div className="w-4/12">
            <h3 className="text-brand-2 mb-5 leading-tight font-semibold font-poppins text-h3">
              Contact Us
            </h3>
            <p className="text-grey-600 text-lg font-normal">
              Questions? Comments? Want to schedule a demo? We’d love to chat!
            </p>
          </div>
          <div className="w-8/12 gap-5 flex flex-row">
            <ContactCard
              cardPadding={"p-4"}
              cardBg={"bg-grey-100"}
              image={emailIcon}
              title={"Email us"}
              subtitle={"Support@zamba"}
            />
            <ContactCard
              cardPadding={"p-4"}
              cardBg={"bg-grey-100"}
              image={phoneIcon}
              title={"Email us"}
              subtitle={"Support@zamba"}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactInformation;
