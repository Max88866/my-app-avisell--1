import React from "react";
import { useSelector } from "react-redux";
import { Ticket } from "../components/Ticket";

export const DataTicketPage = () => {
  const ticket = useSelector((state) => state.ticket.currentticket);
  return (
    <div>
      <p
        style={{ textAlign: "center", fontSize: "25px", marginBottom: "18px" }}
      >
        Подробная информация
      </p>
      {ticket ? <Ticket ticket={ticket} /> : null}
      <div>
        <p
          style={{
            textAlign: "center",
            fontSize: "20px",
            marginBottom: "18px",
          }}
        >
          Напишите ваши пожелания.
        </p>
        <textarea
          style={{
            padding: "15px ",
            width: "100%",
            height: "100px",
            fontSize: "18px",
          }}
        ></textarea>
      </div>
      <div style={{ marginTop: "45px" }}>
        <iframe
          width="100%"
          height="500px"
          src={"https://www.youtube.com/embed/vqz5_t3Q3-0"}
          title="Youtube Video Player"
          frameBorder={0}
        ></iframe>
      </div>
    </div>
  );
};
