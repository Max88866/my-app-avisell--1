import React from "react";
import { v4 as uuidv4 } from "uuid";
import { TicketData } from "./TicketData";

export function Ticket({ ticket, stop }) {
  if (stop) {
    // console.log(stop);
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
      </div>
    );
  } else {
    return (
      <div
        className="ticket"
        style={{
          // display: "block",
          textAlign: "center",
          fontSize: "19px",
          color: "#2196f3",
        }}
      >
        Билеты не загрузились.
        <br />
        <hr />
        Перезагрузите страницу.
      </div>
    );
  }
}
