import React from "react";
import "../../scss/footer/footer.scss";
import logo from "../../svg/footer-logo.svg";
import facebook from "../../svg/facebook.svg";
import twitter from "../../svg/twitter.svg";
import google from "../../svg/google.svg";
import line from "../../svg/line.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer__links">
          <img src={logo} alt="logo" />
          <div className="footer__buttons">
            <a href="">About Us</a>
            <a href="">Contact Us</a>
            <a href="">Privacy</a>
            <a href="">Terms & Conditions</a>
            <a href="">Sitemap</a>
          </div>
        </div>
        <div className="footer__copy">
          <p>
            Copyright © 2015 DreamCreditMaker.com.
            <br /> All Rights Reserved.
          </p>
          <div className="footer__follow">
            <h3>FOLLOW US:</h3>
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={google} alt="" />
          </div>
        </div>
        <img src={line} className="line"/>
        <div className="footer__text">
          <p>
            *See the credit card's terms and conditions on the online
            application page. Note that this website may be compensated by
            credit card issuers when the visitor applies for a card through the
            links on this website. We do our best to maintain all information
            accurate and up to date. However, we do not warrant the credit card
            information won't change. Click the "Apply Online" button and review
            the current info on the secure credit card terms page.
            <br />
            <br /> Information in these articles is brought to you by
            DreamCreditMaker.com. Banks, issuers, and credit card companies
            mentioned in the articles do not endorse or guarantee, and are not
            responsible for, the contents of the articles.
            <br />
            <br /> * The DreamCreditMaker.com webpage is a free service and an
            information resource for credit cards and financial products and
            services available to eligible United States consumers.
            DreamCreditMaker.com does not offer any warranties and is not a
            direct service. There are no guarantees for approval or offers when
            applying for a credit card. Please refer to the application if you
            would like more information on each credit card. When you click
            "Apply" for a particular credit card, please take the time to review
            the terms and conditions of the product/service at the issuer's
            website. All logos on the DreamCreditMaker.com website are property
            of their respective owners.
            <br />
            <br /> This website may be compensated by the credit card issuers
            when people apply for a credit card using the links on this website.
            We strive to maintain the information accurate on the website.
            However, the credit card information is subject to change.
            Therefore, we recommend you to click the "Apply Now" button to
            review the up to date credit card's terms and conditions.
            <br />
            <br /> DreamCreditMaker.com is an independent, advertising-supported
            web site. The offers that appear on our site are from credit card
            issuers and companies from which DreamCreditMaker.com receives
            compensation. This compensation may impact how and where credit
            products appear on our site, including, for example, the order in
            which they may appear within listings on separate pages of our web
            site. DreamCreditMaker.com does not present or review all available
            credit products.
            <br />
            <br /> Please note that DreamCreditMaker.com has financial
            relationships with some of the merchants mentioned here.
            DreamCreditMaker.com may be compensated if consumers choose to
            utilize the links located throught the content on this site and
            generate sales for the said merchant.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
