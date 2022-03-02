import React from "react";
import { useSelector } from "react-redux";
import { Ticket } from "../components/Ticket";

export const DataTicketPage = () => {
  const ticket = useSelector((state) => state.ticket.currentticket);
  return (
    <div>
      Дата-тикет
      <Ticket ticket={ticket} />
      <Ticket ticket={ticket} />
      <Ticket ticket={ticket} />
      <Ticket ticket={ticket} />
    </div>
  );
};
