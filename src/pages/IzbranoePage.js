import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTicketNormalizeIzbranoePage } from "../helper/useTicketNormalizeIzbranoePage.js";
// @ts-ignore
// import avialogo from "../assets/avialogo.svg";
import { Tickets } from "../components/Tickets";
import { v4 as uuidv4 } from "uuid";
import { setnagal } from "../redux/izbranoe/reducer";

export const IzbranoePage = () => {
  const dispatch = useDispatch();
  const nagal = useSelector((state) => state.izbranoe.nagal);
  const {
    // sorterlowprice,
    // sorterfaster,
    // sorteroptim,
    onButtonClickColbeck,
    // sortTickets,
    stop,
    // searchId,
    // setFilterColbeck,
    // filter,
    // sorterHandlerColbeck,
    pervZaprosColbeck,
  } = useTicketNormalizeIzbranoePage();

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
  const ticketInIzbranoe = useSelector(
    (state) => state.izbranoe.itemInIzbranoe
  );

  const calcTotalPrice = (items) =>
    items.reduce((acc, Izbranoe) => (acc += Izbranoe.price2), 0);

  return (
    <div>
      {/* <Tickets
        sortTickets={sortTickets}
        uuidv4={uuidv4}
        stop={stop}
        onButtonClickColbeck={onButtonClickColbeck}
      /> */}
      {ticketInIzbranoe.length ? (
        <Tickets sortTickets={ticketInIzbranoe} uuidv4={uuidv4} stop={stop} />
      ) : (
        <div
          style={{
            // display: "block",
            textAlign: "center",
            fontSize: "19px",
            color: "#2196f3",
          }}
        >
          Нет избранного...
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
          {ticketInIzbranoe.length} билета на сумму{" "}
          {calcTotalPrice(ticketInIzbranoe)} руб.{" "}
        </span>
        <button
          style={{
            cursor: "pointer",
            background: nagal ? "#2196f3" : null,
            color: nagal ? "#ffffff" : null,
          }}
          onClick={() => dispatch(setnagal(nagal))}
        >
          {!nagal ? "Зафиксировать" : "Отменить"}
        </button>
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
