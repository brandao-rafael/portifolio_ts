import React from "react";
import Header from "../components/Header";
import ContactInfo from "../components/ContactInfo";
import EmailForm from "../components/EmailForm";

const Contact: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="contact-container">
        <ContactInfo />
        <EmailForm />
      </div>
    </div>
  );
};

export default Contact;
