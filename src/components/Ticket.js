import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { TicketData } from "./TicketData";
import { useHistory } from "react-router/";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentticket } from "../redux/ticket/reducer";
import { deleteItemFromCart, setItemInCart } from "../redux/cart/reducer";

export function Ticket({ ticket }) {
  // if (stop) {
  //   // console.log(stop);

  //   };}

  const items = useSelector((state) => state.curt.itemInCart);
  const isItemInCart = items.some((item) => item.id === ticket.id);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClickData = () => {
    dispatch(setCurrentticket(ticket));
    history.push(`/dataTicketPage`);
  };
  const handleClickInCart = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(ticket.id));
    } else {
      dispatch(setItemInCart(ticket));
    }
  };

  return (
    <div className="ticket">
      <div className="ticket__header">
        <div className="ticket__price">{ticket.price}</div>
        <div className="ticket__logo">
          <img src={ticket.carrier} alt="sad" />
        </div>
      </div>
      <div className="ticket_data-wrapper">
        {ticket.segments.map((segment) => (
          <TicketData key={uuidv4()} segment={segment} />
        ))}
      </div>
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
        <button style={{ cursor: "pointer" }}>sdf</button>
        <button style={{ cursor: "pointer" }} onClick={handleClickInCart}>
          купить
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
