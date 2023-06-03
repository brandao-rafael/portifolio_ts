import React from "react";
import emailjs from "@emailjs/browser";
import Header from "../components/Header";
import {
  emailSvg,
  githubSvg,
  linkedinSvg,
  locationSvg,
  phoneSvg,
} from "../helpers/svgs";

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
    console.log(SERVICE_ID, TEMPLATE_ID, EMAILJS_PUBLIC_KEY);

    emailjs
      .send(
        SERVICE_ID as string,
        TEMPLATE_ID as string,
        toSend,
        EMAILJS_PUBLIC_KEY as string
      )
      .then((_) => {
        alert("Email sent!");
        setToSend({ from_name: "", to_name: "", message: "", reply_to: "" });
      })
      .catch((_) => {
        alert("An error occurred, Please try again");
      });
  };

  const handleChange = (e: React.ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setToSend({ ...toSend, [name]: value });
  };

  console.log(SERVICE_ID, TEMPLATE_ID, EMAILJS_PUBLIC_KEY);

  return (
    <div>
      <Header />
      <div className="contact-container">
        <div className="contact-title-content">
          <h2>
            <span>
              Get in touch <br />
            </span>
          </h2>
          <div className="contact-description">
            <p>
              Have a project in mind? Looking for a developer to your team? Want
              to know more about me? Feel free to contact me in one of the
              channels below or reach out throught form and I will get back to
              you as soon as possible.
            </p>
          </div>
          <div className="contact-session">
            <div className="contact-item">
              <div dangerouslySetInnerHTML={{ __html: emailSvg }} />
              <p>rafaelbrandao1992@gmail.com</p>
            </div>
            <div className="contact-item">
              <div dangerouslySetInnerHTML={{ __html: phoneSvg }} />
              <p>+55 (35) 99830-3880</p>
            </div>
            <div className="contact-item">
              <div dangerouslySetInnerHTML={{ __html: locationSvg }} />
              <p>Itajubá, Minas Gerais, Brazil</p>
            </div>
            <div className="contact-item">
              <div dangerouslySetInnerHTML={{ __html: githubSvg }} />
              <p>github.com/brandao-rafael</p>
            </div>
            <div className="contact-item">
              <div dangerouslySetInnerHTML={{ __html: linkedinSvg }} />
              <p>linkedin.com/in/brandao-rafael</p>
            </div>
          </div>
        </div>
        <div>
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
