import React from "react";
import Header from "../components/Header";
import ContactInfo from "../components/ContactInfo";
import EmailForm from "../components/EmailForm";
import Footer from "../components/Footer";

const Contact: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="contact-container">
        <ContactInfo />
        <EmailForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
