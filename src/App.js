import React, { useCallback, useEffect, useRef } from "react";
// @ts-ignore
import logo from "./assets/logo.svg";
// import checkerOn from "./assets/checker-on.svg";
// import checkerOff from "./assets/checker-off.svg";
// @ts-ignore
import avialogo from "./assets/avialogo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import ticketNormalize from "./helper/ticketNormalize.js";
import { Ticket } from "./components/Ticket";
// import { Sidebar } from "./components/Sidebar";
const LOW_PRICE = "lowprice";
const FASTER_PRICE = "faster";
const OPTIM_PRICE = "optim";

function App() {
  const [searchId, setSearchId] = useState();
  const [tickets, settickets] = useState([]);
  const [stop, setStop] = useState(false);
  const [sortTickets, setsortTickets] = useState([]);
  const [filter, setFilter] = useState({
    all: true,
    without: false,
    one: false,
    two: false,
    three: false,
  });

  // const [sorterQveri, setsorterQveri] = useState(false);

  const [sorterlowprice, setsorterlowprice] = useState(false);
  const [sorterfaster, setsorterfaster] = useState(false);
  const [sorteroptim, setsorteroptim] = useState(false);
  // const [sorterQveri, setsorterQveri] = useState();

  const schet = useRef(0);
  let clonTickets = useRef([]);

  function onButtonClick() {
    schet.current = schet.current + 5;
    setsortTickets((prev) => [
      ...prev,
      ...ticketNormalize(
        filterTickets(clonTickets.current).slice(
          0 + schet.current,
          5 + schet.current
        )
      ),
    ]);
  }

  function allSorter(clonTicketsed) {
    if (sorterlowprice) {
      return clonTicketsed.sort((a, b) => a.price - b.price);
    }
    if (sorterfaster) {
      return clonTicketsed.sort(
        (a, b) =>
          Number(a.segments[0].duration) +
          Number(a.segments[1].duration) -
          (Number(b.segments[0].duration) + Number(b.segments[1].duration))
      );
    }
    if (sorteroptim) {
      return clonTicketsed.sort((a, b) => a.price - b.price);
    }
    return clonTicketsed;
  }

  function filterTickets(clonTicketsSorted) {
    return clonTicketsSorted.filter((el) => {
      if (filter.all) return true;
      if (
        filter.without &&
        el.segments[0].stops.length === 0 &&
        el.segments[1].stops.length === 0
      )
        return true;
      if (
        filter.one &&
        el.segments[0].stops.length === 1 &&
        el.segments[1].stops.length === 1
      )
        return true;
      if (
        filter.two &&
        el.segments[0].stops.length === 2 &&
        el.segments[1].stops.length === 2
      )
        return true;
      if (
        filter.three &&
        el.segments[0].stops.length === 3 &&
        el.segments[1].stops.length === 3
      )
        return true;
    });
  }
  useEffect(() => {
    if (sorterlowprice) {
      setFilter({
        all: true,
        without: false,
        one: false,
        two: false,
        three: false,
      });
    }
    if (sorterfaster) {
      setFilter({
        all: true,
        without: false,
        one: false,
        two: false,
        three: false,
      });
    }
    if (sorteroptim) {
      setFilter({
        all: false,
        without: true,
        one: false,
        two: false,
        three: false,
      });
    }
  }, [sorterlowprice, sorterfaster, sorteroptim]);

  useEffect(() => {
    if (!searchId) {
      subscribeSearchId();
    } else if (searchId && stop === false) {
      subscribe();
    } else if (stop) {
      clonTickets.current = [...tickets];
      schet.current = 0;
      // console.log(tickets);
      setsortTickets(
        ticketNormalize(
          filterTickets(allSorter(clonTickets.current)).slice(0, 5)
        )
      );
      console.log(clonTickets.current);
    }
  }, [searchId, tickets, filter]); //, kye

  function subscribeSearchId() {
    fetch("https://front-test.beta.aviasales.ru/search")
      .then((res) => res.json())
      .then((res) => {
        console.log("res:", res);
        setSearchId(res.searchId);
      })
      .catch((e) => console.log(e));
  }

  async function subscribe() {
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
  }

  const sorterHandler = (sortedButton) => {
    switch (sortedButton) {
      case LOW_PRICE:
        setsorterlowprice(!sorterlowprice);
        setsorterfaster(false);
        setsorteroptim(false);
        break;
      case FASTER_PRICE:
        setsorterfaster(!sorterfaster);
        setsorterlowprice(false);
        setsorteroptim(false);
        break;
      case OPTIM_PRICE:
        setsorteroptim(!sorteroptim);
        setsorterlowprice(false);
        setsorterfaster(false);
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <div className="app-wrapper">
        <div className="header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="main">
          <div className="dumi">
            <div className="sidebar">
              <h3>количество пересадок</h3>
              <form>
                <label>
                  <input
                    type="checkbox"
                    className="input visually-hidden"
                    onChange={() =>
                      setFilter({
                        all: true,
                        without: false,
                        one: false,
                        two: false,
                        three: false,
                      })
                    }
                    checked={filter.all}
                  />
                  <span className="checker"></span>
                  Все
                </label>
                <label>
                  <input
                    type="checkbox"
                    className="input visually-hidden"
                    onChange={() =>
                      setFilter({
                        all: false,
                        without: true,
                        one: false,
                        two: false,
                        three: false,
                      })
                    }
                    checked={filter.without}
                  />
                  <span className="checker"></span>
                  Без пересадок
                </label>
                <label>
                  <input
                    type="checkbox"
                    className="input visually-hidden"
                    onChange={() =>
                      setFilter({
                        all: false,
                        without: false,
                        one: true,
                        two: false,
                        three: false,
                      })
                    }
                    checked={filter.one}
                  />
                  <span className="checker"></span>1 пересадка
                </label>
                <label>
                  <input
                    type="checkbox"
                    className="input visually-hidden"
                    onChange={() =>
                      setFilter({
                        all: false,
                        without: false,
                        one: false,
                        two: true,
                        three: false,
                      })
                    }
                    checked={filter.two}
                  />
                  <span className="checker"></span>2 пересадка
                </label>
                <label>
                  <input
                    type="checkbox"
                    className="input visually-hidden"
                    onChange={() =>
                      setFilter({
                        all: false,
                        without: false,
                        one: false,
                        two: false,
                        three: true,
                      })
                    }
                    checked={filter.three}
                  />
                  <span className="checker"></span>3 пересадка
                </label>
              </form>
            </div>
          </div>
          <div className="filter2">
            <div
              className={`filter2__element filter2__low-price ${
                sorterlowprice ? "filter2__element__clicked" : ""
              }`}
              onClick={() => {
                return sorterHandler(LOW_PRICE);
              }}
            >
              Самый дешёвый
            </div>
            <div
              className={`filter2__element filter2__faster ${
                sorterfaster ? "filter2__element__clicked" : ""
              }`}
              onClick={() => sorterHandler(FASTER_PRICE)}
            >
              Самый быстрый
            </div>
            <div
              className={`filter2__element filter2__optim ${
                sorteroptim ? "filter2__element__clicked" : ""
              }`}
              onClick={() => sorterHandler(OPTIM_PRICE)}
            >
              Оптимальный
            </div>
          </div>
          <div className="tickets">
            {stop ? (
              sortTickets.map((tickett) => (
                <Ticket key={uuidv4()} ticket={tickett} stop={stop} />
              ))
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
            {stop ? (
              <input
                className="inputButtonLoud"
                type="button"
                value="Показать еще 5 билетов!"
                onClick={onButtonClick}
              ></input>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
function folse(folse) {
  throw new Error("Function not implemented.");
}
