import React from "react";
import mail from "../../../svg/mail.svg";

export default function MailAdress() {
  return (
    <div className="mail-adress">
      <div className="mail-adress__image">
        <img src={mail} alt="mail" />
      </div>
      <div className="mail-adress__text">
        <h2>MAILING ADDRESS:</h2>
        <p>
          1680 South Ashland Ave Suit# 3007
          <br /> Chicago, IL 60608-2013
        </p>
      </div>
    </div>
  );
}
