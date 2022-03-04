import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTicketNormalizeOrderPage } from "../helper/useTicketNormalizeOrderPage.js";
// @ts-ignore
// import avialogo from "../assets/avialogo.svg";
import { Tickets } from "../components/Tickets";
import { v4 as uuidv4 } from "uuid";
import { Ticket } from "../components/Ticket.js";

export const OrderPage = () => {
  const {
    // sorterlowprice,
    // sorterfaster,
    // sorteroptim,
    onButtonClickColbeck,
    sortTickets,
    stop,
    searchId,
    // setFilterColbeck,
    // filter,
    // sorterHandlerColbeck,
    pervZaprosColbeck,
  } = useTicketNormalizeOrderPage();

  useEffect(() => {
    pervZaprosColbeck();
  }, []);
  // const [tickets, settickets] = useState({
  //   price: 1111,
  //   carrier: avialogo,
  //   segments: [
  //     {
  //       origin: "MOW",
  //       destination: "HKT",
  //       date: "2020-05-19T12:48:00.000Z",
  //       stops: ["BKK"],
  //       duration: 1111,
  //     },
  //     {
  //       origin: "MOW",
  //       destination: "HKT",
  //       date: "2020-06-08T12:29:00.000Z",
  //       stops: ["BKK", "Gheh"],
  //       duration: 1111,
  //     },
  //   ],
  // });
  const ticketInCart = useSelector((state) => state.curt.itemInCart);
  const calcTotalPrice = (items) =>
    items.reduce((acc, Cart) => (acc += Cart.price2), 0);

  return (
    <div>
      {/* <Tickets
        sortTickets={sortTickets}
        uuidv4={uuidv4}
        stop={stop}
        onButtonClickColbeck={onButtonClickColbeck}
      /> */}
      {ticketInCart.map((ticketInCart1) => (
        <Ticket ticket={ticketInCart1} key={uuidv4()} />
      ))}
      {ticketInCart.length === 0 && (
        <div
          style={{
            // display: "block",
            textAlign: "center",
            fontSize: "19px",
            color: "#2196f3",
          }}
        >
          Корзина пуста...
          <hr />
        </div>
      )}
      <div
        style={{
          // display: "block",
          textAlign: "center",
          fontSize: "19px",
          color: "#2196f3",
        }}
      >
        <span>
          {ticketInCart.length} билета на сумму {calcTotalPrice(ticketInCart)}{" "}
          руб.
        </span>
      </div>
      {/* {searchId ? (
        <Tickets
          sortTickets={searchId}
          uuidv4={uuidv4}
          stop={stop}
          onButtonClickColbeck={onButtonClickColbeck}
        />
      ) : null} */}
    </div>
  );
};
