import React from "react";
import { Ticket } from "./Ticket";

export function Tickets({ sortTickets, stop, uuidv4 }) {
  return (
    <div className="tickets">
      {stop ? (
        sortTickets.map((ticket) => <Ticket key={uuidv4()} ticket={ticket} />)
      ) : (
        <div
          style={{
            // display: "block",
            textAlign: "center",
            fontSize: "19px",
            color: "#2196f3",
          }}
        >
          Загрузка...
          <hr />
        </div>
      )}
    </div>
  );
}
