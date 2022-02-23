import React, { useEffect } from "react";
import logo from "./assets/logo.svg";
// import checkerOn from "./assets/checker-on.svg";
// import checkerOff from "./assets/checker-off.svg";
import avialogo from "./assets/avialogo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [searchId, setSearchId] = useState();
  const [tickets, settickets] = useState([]);
  const [stop, setStop] = useState(false);
  const [sortTickets, setsortTickets] = useState([]);
  // const [kye, setkye] = useState(false);

  // useEffect(() => {
  //   if (stop === true) {
  //     setSortTickets(tickets.slice(0, 4));
  //   }
  // }, [stop]);

  // useEffect(() => {
  //   fetch("https://front-test.beta.aviasales.ru/search")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log("res:", res);
  //       setSearchId(res.searchId);
  //     })
  //     .catch((e) => console.log(e));
  // }, []);
  // useEffect(() => {
  //   if (kye) {
  //     console.log(tickets);
  //     setSortTickets(tickets.slice(0, 4));
  //   }
  // }, [kye]);

  useEffect(() => {
    if (!searchId) {
      subscribeSearchId();
    } else if (searchId && stop === false) {
      subscribe();
    } else if (stop) {
      console.log(tickets);
      setsortTickets(tickets.slice(0, 100));
      // ticketNormalize(sortTickets);
    }
  }, [searchId, tickets]); //, kye

  const subscribeSearchId = () => {
    fetch("https://front-test.beta.aviasales.ru/search")
      .then((res) => res.json())
      .then((res) => {
        console.log("res:", res);
        setSearchId(res.searchId);
      })
      .catch((e) => console.log(e));
  };

  const subscribe = async () => {
    try {
      const url = `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`;
      const ticketsPart = await axios.get(url);
      // @ts-ignore
      if (ticketsPart.data.stop) {
        setStop(true);
      }
      settickets((prev) => [...prev, ...ticketsPart.data.tickets]);
      console.log(ticketsPart.data);
      // @ts-ignore
    } catch (e) {
      setTimeout(() => {
        console.log(e);
        // if (!stop) {
        //   setkye(!kye);
        // }
        subscribe();
      }, 1000);
    }
  };

  // useEffect(() => {
  //   if (searchId && stop === false) {
  //       subscribe();
  //   }
  //   async function subscribe() {
  //     try {
  //       let response = await fetch(
  //         `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`
  //       );
  //       let ticketsPart = await response.json();
  //       if (ticketsPart.stop) {
  //         setStop(true);
  //       }
  //       settickets([...tickets, ...ticketsPart.tickets]);
  //       console.log(ticketsPart);
  //     } catch (e) {
  //       setTimeout(() => {
  //         console.log(e);
  //         if (!stop) {
  //           setkye(!kye);
  //         }
  //       }, 1000);
  //     }
  //   }
  // }, [searchId, tickets, kye]);

  return (
    <div className="App">
      <div className="app-wrapper">
        <div className="header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="main">
          <Sidebar />
          <Filter />
          <div className="tickets">
            {sortTickets.map((tickett) => (
              <Ticket key={uuidv4()} ticket={tickett} stop={stop} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="dumi">
      <div className="sidebar">
        <h3>количество пересадок</h3>
        <form>
          <label>
            <input type="checkbox" className="input visually-hidden" />
            <span className="checker"></span>
            Все
          </label>
          <label>
            <input type="checkbox" className="input visually-hidden" />
            <span className="checker"></span>
            Без пересадок
          </label>
          <label>
            <input type="checkbox" className="input visually-hidden" />
            <span className="checker"></span>1 пересадка
          </label>
          <label>
            <input type="checkbox" className="input visually-hidden" />
            <span className="checker"></span>2 пересадка
          </label>
          <label>
            <input type="checkbox" className="input visually-hidden" />
            <span className="checker"></span>3 пересадка
          </label>
        </form>
      </div>
    </div>
  );
}

function Filter() {
  return (
    <div className="filter2">
      <div className="filter2__element filter2__low-price filter2__element__clicked">
        Самый дешёвый
      </div>
      <div className="filter2__element filter2__faster">Самый быстрый</div>
    </div>
  );
}

function Ticket({ ticket, stop }) {
  if (stop) {
    console.log(stop);
    return (
      <div className="ticket">
        <div className="ticket__header">
          <div className="ticket__price">
            {ticket.price
              .toString()
              .split("")
              .reverse()
              .reduce((sum, char, i) => {
                if (i % 3 === 0) {
                  return sum + " " + char;
                }
                return sum + char;
              }, "бур ")
              .split("")
              .reverse()
              .join("")}
          </div>
          <div className="ticket__logo">
            <img src={`//pics.avs.io/99/36/${ticket.carrier}.png`} alt="sad" />
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
    return null;
  }
}

function TicketData({ segment }) {
  return (
    <div className="ticket_data">
      <div className="ticket_data__item">
        <p className="ticket_data__item__grey">{`${segment.origin}-${segment.destination}`}</p>
        <p>
          {new Date(segment.date).getHours() +
            ":" +
            new Date(segment.date).getMinutes() +
            "-" +
            new Date(
              new Date(segment.date).setHours(
                new Date(segment.date).getHours() +
                  Math.ceil(segment.duration / 60)
              )
            ).getHours() +
            ":" +
            new Date(
              new Date(segment.date).setMinutes(
                new Date(segment.date).getMinutes() + segment.duration
              )
            ).getMinutes()}
        </p>
      </div>
      <div className="ticket_data__item">
        <p className="ticket_data__item__grey">В пути</p>
        <p>
          {Math.ceil(segment.duration / 60) +
            " ч - " +
            (segment.duration % 60) +
            " м"}
        </p>
      </div>
      <div className="ticket_data__item">
        <p className="ticket_data__item__grey">
          {segment.stops.length === 0
            ? "Без пересадок"
            : segment.stops.length === 1
            ? "1 Пересадка"
            : segment.stops.length >= 2
            ? `${segment.stops.length} пересадки`
            : ""}
        </p>
        <p>{segment.stops.join(", ")}</p>
      </div>
    </div>
  );
}
export default App;

// function ticketNormalize(arrTicket) {
//   function priceNormalize(price) {
//     return price
//       .toString()
//       .split("")
//       .reverse()
//       .reduce((sum, char, i) => {
//         if (i % 3 === 0) {
//           return sum + " " + char;
//         }
//         return sum + char;
//       }, "Р ")
//       .split("")
//       .reverse()
//       .join("");
//   }
//   return arrTicket.map((ticket) => {
//     return (
//       price: priceNormalize(ticket.price) ) ,
//       carrier : `//pics.avs.io/99/36/${ticket.carrier}.png`,
//       segments:[] })
// }
