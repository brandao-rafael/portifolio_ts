import React from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const SERVICE_ID = process.env.SERVICE_ID;
const TEMPLATE_ID = process.env.TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;

const EmailForm: React.FC = () => {
  const [toSend, setToSend] = React.useState({
    from_name: "",
    to_name: "Rafael",
    message: "",
    reply_to: "",
  });

  const { t } = useTranslation();

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
        toast("Email sent!");
        setToSend({
          from_name: "",
          to_name: "Rafael",
          message: "",
          reply_to: "",
        });
      })
      .catch((_) => {
        toast("An error occurred, Please try again");
      });
  };

  const handleChange = (e: React.ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setToSend({ ...toSend, [name]: value });
  };

  return (
    <div className="contact-form">
      <form onSubmit={onSubmit}>
        <label htmlFor="fromName">
          {t("contact.form.name")}
          <input
            id="fromName"
            type="text"
            name="from_name"
            placeholder=" Enter your name"
            value={toSend.from_name}
            onChange={(e) => handleChange(e)}
            required
          />
        </label>
        <label htmlFor="userEmail">
          {t("contact.form.email")}
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
          {t("contact.form.message")}
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
          {t("button.submit")}
        </button>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default EmailForm;
