import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { TicketData } from "./TicketData";
import { useHistory } from "react-router/";
import { useDispatch } from "react-redux";
import { setCurrentticket } from "../redux/ticket/reducer";

export function Ticket({ ticket }) {
  // if (stop) {
  //   // console.log(stop);

  //   };}
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClick = () => {
    dispatch(setCurrentticket(ticket));
    history.push(`/dataTicketPage`);
  };

  return (
    <div className="ticket" onClick={handleClick} style={{ cursor: "pointer" }}>
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
