import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// @ts-ignore
import logo from "../assets/logo.svg";

export function Header() {
  const [nagal, setnagal] = useState({
    one: true,
    two: false,
    three: false,
  });
  const ticketInCart = useSelector((state) => state.curt.itemInCart);
  const ticketInIzbranoe = useSelector(
    (state) => state.izbranoe.itemInIzbranoe
  );
  return (
    <div
      className="header "
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <img
        src={logo}
        className="App-logo"
        alt="logo"
        style={{
          display: "block",
          position: "fixed",
          left: "200px",
          top: "35px",
        }}
      />
      <Link to="/">
        <div></div>
        <button
          style={{
            cursor: "pointer",
            background: nagal.one ? "#2196f3" : null,
            color: nagal.one ? "#ffffff" : null,
          }}
          onClick={() =>
            setnagal({
              one: true,
              two: false,
              three: false,
            })
          }
        >
          Главная
        </button>
      </Link>
      <Link to="/izbranoe">
        <div></div>
        <button
          style={{
            cursor: "pointer",
            background: nagal.two ? "#2196f3" : null,
            color: nagal.two ? "#ffffff" : null,
          }}
          onClick={() =>
            setnagal({
              one: false,
              two: true,
              three: false,
            })
          }
        >
          В избранном {ticketInIzbranoe.length}
        </button>
      </Link>
      <Link to="/order">
        <div></div>
        <button
          style={{
            cursor: "pointer",
            background: nagal.three ? "#2196f3" : null,
            color: nagal.three ? "#ffffff" : null,
          }}
          onClick={() =>
            setnagal({
              one: false,
              two: false,
              three: true,
            })
          }
        >
          В корзине {ticketInCart.length}
        </button>
      </Link>
    </div>
  );
}
