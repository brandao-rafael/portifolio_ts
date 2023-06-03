import React from "react";
import emailjs from "@emailjs/browser";
import Header from "../components/Header";
import ContactInfo from "../components/ContactInfo";

const SERVICE_ID = process.env.SERVICE_ID;
const TEMPLATE_ID = process.env.TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;

const Contact: React.FC = () => {
  const [toSend, setToSend] = React.useState({
    from_name: "",
    to_name: "Rafael",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.init(EMAILJS_PUBLIC_KEY as string);

    emailjs
      .send(
        SERVICE_ID as string,
        TEMPLATE_ID as string,
        toSend,
        EMAILJS_PUBLIC_KEY as string
      )
      .then((_) => {
        alert("Email sent!");
        setToSend({
          from_name: "",
          to_name: "Rafael",
          message: "",
          reply_to: "",
        });
      })
      .catch((_) => {
        alert("An error occurred, Please try again");
      });
  };

  const handleChange = (e: React.ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setToSend({ ...toSend, [name]: value });
  };

  return (
    <div>
      <Header />
      <div className="contact-container">
        <ContactInfo />
        <div className="contact-form">
          <fieldset>
            <form onSubmit={onSubmit}>
              <label htmlFor="fromName">
                <input
                  id="fromName"
                  type="text"
                  name="from_name"
                  placeholder=" Your name"
                  value={toSend.from_name}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </label>
              <label htmlFor="userEmail">
                <input
                  id="userEmail"
                  type="text"
                  name="reply_to"
                  placeholder=" Your email"
                  value={toSend.reply_to}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </label>
              <label htmlFor="message">
                <textarea
                  id="message"
                  name="message"
                  placeholder=" Your message"
                  value={toSend.message}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </label>
              <button type="submit" className="btn btn-gradient">
                Send
              </button>
            </form>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Contact;
