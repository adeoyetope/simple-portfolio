import React, { useRef } from "react";
import Icons from "../Icons";
import "./client.css";
import emailjs from "@emailjs/browser";


// emailjs was installed by following google set up
// emailjs.com scroll to react, to public key to get public key, then to service key to get service key, then to template to get the template key
// the email template can be edited.

const PUBLIC_KEY = import.meta.env.VITE_APP_API_EMAIL_PIBLIC_KEY;
const SERVICE_KEY = import.meta.env.VITE_APP_API_EMAIL_SERVICE_KEY;
const TEMPLATE_KEY = import.meta.env.VITE_APP_API_EMAIL_TEMPLATE_KEY;

console.log(PUBLIC_KEY, SERVICE_KEY, TEMPLATE_KEY);

const Client = () => {
  // SET UP EMAIL RESPONSE

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_KEY, TEMPLATE_KEY, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset()
          alert("Your message has been sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="clientContainer" id="client">
      <h2 className="client">My clients</h2>
      <p className="clientP">
        I have had the opportunity to work with diverse group of companies, some
        of the notable companies I have work with include
      </p>
      <div className="company">
        <div>
          <h2>Walmart </h2>
          <img src={Icons.library} alt="" />
        </div>
        <div>
          <img src={Icons.reactPhoto} alt="" />
          <h2> Adobe</h2>
        </div>
        <div>
          <img src={Icons.library} alt="" />
          <h2> Microsoft</h2>
        </div>
        <div>
          <h2>Facebook</h2>
        </div>
      </div>
      <div className="clientContact">
        <h2 className="contact">Contact me</h2>
      </div>
      <p>Please fill out the form below to discuss any work opportunity</p>
      <div className="clientInput">
        <form action="" ref={form} onSubmit={sendEmail}>
          <input type="text" name="your_name" id="" placeholder="Your name" />
          <input type="text" name="your_email" id="" placeholder="Email" />
          <input type="text" name="your_address" id="" placeholder="Address" />
          <textarea
            name="message"
            rows={10}
            id=""
            placeholder="your mesage"
          ></textarea>
          <button>Submit</button>
        </form>
      </div>
      <div className="social">
        <img src={Icons.play} alt="" />
        <img src={Icons.lautech} alt="" />
        <img src={Icons.whatsapp} alt="" />
        <img src={Icons.messages} alt="" />
      </div>
    </div>
  );
};

export default Client;
