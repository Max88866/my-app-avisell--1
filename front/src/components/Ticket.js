import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { TicketData } from "./TicketData";
import { useHistory } from "react-router/";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentticket } from "../redux/ticket/reducer";
import { deleteItemFromCart, setItemInCart } from "../redux/cart/reducer";
import {
  deleteItemFromIzbranoe,
  setItemInIzbranoe,
} from "../redux/izbranoe/reducer";
import { useState } from "react";
import axios from "axios";

export function Ticket({ ticket }) {
  // if (stop) {
  //   // console.log(stop);

  //   };}

  const InCart = useSelector((state) => state.curt.itemInCart);
  const InIzbranoe = useSelector((state) => state.izbranoe.itemInIzbranoe);
  const isItemInCart = InCart.some((item) => item.id === ticket.id);
  const ticketInIzbranoe = InIzbranoe.some((item) => item.id === ticket.id);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClickData = () => {
    dispatch(setCurrentticket(ticket));
    history.push(`/dataTicketPage`);
  };
  const handleClickInIzbranoe = (e) => {
    e.stopPropagation();
    if (ticketInIzbranoe) {
      dispatch(deleteItemFromIzbranoe(ticket.id));
    } else {
      dispatch(setItemInIzbranoe(ticket));
    }
  };
  const handleClickInCart = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(ticket.id));
    } else {
      dispatch(setItemInCart(ticket));
    }
  };
  //dcdcdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
  const [ticketPrice, setticketPrice] = useState(ticket.price2);
  const upgradeHandlPrace = (ticketid, ticketPrice) => {
    console.log("sdas");
    axios
      .put(`http://localhost:5000/putprice/${ticketid}`, { body: ticketPrice })
      .then((res) => console.log(res.data));
    console.log("sdas");
  };

  return (
    <div className="ticket">
      <div className="ticket__header">
        <div className="ticket__price">
          <input
            value={ticketPrice}
            onChange={(x) => setticketPrice(x.target.value)}
          />
        </div>
        <div className="ticket__logo">
          <img src={ticket.carrier} alt="sad" />
        </div>
      </div>
      <div className="ticket_data-wrapper">
        {ticket.segments.map((segment) => (
          <TicketData key={uuidv4()} segment={segment} />
        ))}
      </div>
      {/* //Tododdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd: sdfsdf */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "25px 0 5px",
        }}
      >
        <button onClick={handleClickData} style={{ cursor: "pointer" }}>
          Подробнее
        </button>
        <button
          style={{
            cursor: "pointer",
            background: ticketInIzbranoe ? "#2196f3" : null,
            color: ticketInIzbranoe ? "#ffffff" : null,
          }}
          onClick={handleClickInIzbranoe}
        >
          {ticketInIzbranoe ? "Из избранного" : "В избранное"}
        </button>
        <button
          style={{
            cursor: "pointer",
            background: isItemInCart ? "#2196f3" : null,
            color: isItemInCart ? "#ffffff" : null,
          }}
          onClick={handleClickInCart}
        >
          {isItemInCart ? "Из корзины" : "В Корзину"}
        </button>
      </div>
      {/* //Todo: sdfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddsdf */}
      <div>
        <button
          style={{
            cursor: "pointer",
            background: isItemInCart ? "#2196f3" : null,
            color: isItemInCart ? "#ffffff" : null,
          }}
          onClick={() => upgradeHandlPrace(ticket.id, ticketPrice)}
        >
          {isItemInCart ? "Из корзины" : "Обновить"}
        </button>
      </div>
    </div>
  );
}

// else {
//   return (
//     <div
//       className="ticket"
//       style={{
//         // display: "block",
//         textAlign: "center",
//         fontSize: "19px",
//         color: "#2196f3",
//       }}
//     >
//       Билеты не загрузились.
//       <br />
//       <hr />
//       Перезагрузите страницу.
//     </div>
//   );
// }
