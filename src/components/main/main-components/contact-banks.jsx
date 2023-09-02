import React from "react";
import bracket from "../../../svg/bracket-bank.svg";

import bofi from "../../../svg/banks/bofi.svg";
import capital_one from "../../../svg/banks/capital-one.svg";
import capital_bank from "../../../svg/banks/capital-bank.svg";
import credit from "../../../svg/banks/credit.svg";
import meta from "../../../svg/banks/meta.svg";
import mid from "../../../svg/banks/mid.svg";
import simmons from "../../../svg/banks/simmons.svg";
import usaa from "../../../svg/banks/usaa.svg";

export default function ContactBanks() {
  const Card = ({ img, name }) => {
    return (
      <div className="card">
        <img src={img} alt="bank img" className="bank-image" />
        <img src={bracket} alt="bracket" className="bracket" />
        <div className="card-text">
          <h2>{name}</h2>
          <p>
            Customer Service: <br />
            <span>800-955-7070</span>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="contact-banks">
      <div className="contact-banks__container">
        <div className="container__header">
          <h2>CONTACT INFORMATION OF BANKS:</h2>
        </div>
        <div className="container__grid">
          <Card img={bofi} name={"BOFI:"} />
          <Card img={capital_one} name={"CAPITAL ONE®:"} />
          <Card img={capital_bank} name={"CAPITAL BANK:"} />
          <Card img={credit} name={"CREDIT ONE BANK®:"} />
          <Card img={meta} name={"METABANK:"} />
          <Card img={mid} name={"MID AMERICA BANK:"} />
          <Card img={simmons} name={"SIMMONS FIRST:"} />
          <Card img={usaa} name={"USAA:"} />
        </div>
      </div>
    </div>
  );
}
