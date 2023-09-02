import React from "react";
import "../../scss/main/main.scss";
import ContactUs from "./main-components/contact-us";
import WriteUs from "./main-components/write-us";
import MailAdress from "./main-components/mail-adress";
import Contact from "./main-components/contact-banks";

export default function Main() {
  return (
    <div className="main">
      <ContactUs />
      <WriteUs />
      <MailAdress />
      <Contact />
    </div>
  );
}
