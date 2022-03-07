import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTicketNormalizeOrderPage } from "../helper/useTicketNormalizeOrderPage.js";
// @ts-ignore
// import avialogo from "../assets/avialogo.svg";
import { Tickets } from "../components/Tickets";
import { v4 as uuidv4 } from "uuid";
import { Ticket } from "../components/Ticket.js";
import { setItemInCart, setnagal } from "../redux/cart/reducer";

export const OrderPage = () => {
  const dispatch = useDispatch();
  const nagal = useSelector((state) => state.curt.nagal);
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
  // const handlclick = () => {
  //   dispatch(setnagal(nagal));
  //   PosterTicket();
  //   async function PosterTicket() {
  //     let response = await fetch("http://localhost:5000/profile", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json;charset=utf-8",
  //       },
  //       body: JSON.stringify(ticketInCart),
  //     });

  //     let result = await response.json();
  //     // let result2 = await result.json();
  //     // alert("result.message");
  //     console.log(result);
  //     // console.log(result2);
  //   }
  // };
  // useEffect(() => {
  //   if (ticketInCart.length === 0) {
  //     subscribeSearchId();
  //   }
  // }, []);
  // function subscribeSearchId() {
  //   fetch("http://localhost:5000/testsPostTikettt")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       // console.log("res:", res);
  //       dispatch(setItemInCart(res));
  //     })
  //     .catch((e) => console.log(e));
  // }
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
          руб.{" "}
        </span>
        <button
          style={{
            cursor: "pointer",
            background: nagal ? "#2196f3" : null,
            color: nagal ? "#ffffff" : null,
          }}
          // onClick={() => handlclick()}
        >
          {!nagal ? "Купить" : "Отменить"}
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
