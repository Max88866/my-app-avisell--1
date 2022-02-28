import React from "react";
import { Link } from "react-router-dom";
// @ts-ignore
import logo from "../assets/logo.svg";

export function Header() {
  return (
    <div
      className="header "
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <Link to="/">
        <button>TicketPage</button>
      </Link>
      <img src={logo} className="App-logo" alt="logo" />
      <Link to="/order">
        <button>OrderPage</button>
      </Link>
    </div>
  );
}
