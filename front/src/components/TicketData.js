import React from "react";

export function TicketData({ segment }) {
  return (
    <div className="ticket_data">
      <div className="ticket_data__item">
        <p className="ticket_data__item__grey">{segment.out}</p>
        <p>{segment.outTime}</p>
      </div>
      <div className="ticket_data__item">
        <p className="ticket_data__item__grey">В пути</p>
        <p>{segment.duration}</p>
      </div>
      <div className="ticket_data__item">
        <p className="ticket_data__item__grey">{segment.stopsLength}</p>

        <p>{segment.stops}</p>
      </div>
    </div>
  );
}
