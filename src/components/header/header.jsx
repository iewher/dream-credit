import React from "react";
import "../../scss/header/header.scss";
import logo from "../../svg/header-logo.svg";
import search from "../../svg/search.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header__buttons">
        <a>PREPAID & CREDIT OFFERS</a>
        <a>RESOURCES</a>
        <div className="input">
          <input type="text" />
          <button>
            <img src={search} alt="search" />
          </button>
        </div>
      </div>
    </div>
  );
}
