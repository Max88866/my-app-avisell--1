import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTicketNormalizeOrderPage } from "../helper/useTicketNormalizeOrderPage.js";
// @ts-ignore
// import avialogo from "../assets/avialogo.svg";
import { Tickets } from "../components/Tickets";
import { v4 as uuidv4 } from "uuid";

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

  return (
    <div>
      Ордер
      {/* <Tickets
        sortTickets={sortTickets}
        uuidv4={uuidv4}
        stop={stop}
        onButtonClickColbeck={onButtonClickColbeck}
      /> */}
      {ticketInCart ? (
        <Tickets
          sortTickets={ticketInCart}
          uuidv4={uuidv4}
          stop={stop}
          onButtonClickColbeck={onButtonClickColbeck}
        />
      ) : null}
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
