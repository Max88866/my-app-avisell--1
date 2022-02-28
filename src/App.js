import React, { useEffect } from "react";
// @ts-ignore
import logo from "./assets/logo.svg";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { useTicketNormalize } from "./helper/useTicketNormalize.js";

import { Sidebar } from "./components/Sidebar";
import { Filter2 } from "./components/Filter2";
import { Tickets } from "./components/Tickets";

function App() {
  const {
    sorterlowprice,
    sorterfaster,
    sorteroptim,
    onButtonClickColbeck,
    sortTickets,
    stop,
    setFilterColbeck,
    filter,
    sorterHandlerColbeck,
    pervZaprosColbeck,
  } = useTicketNormalize();

  useEffect(() => {
    pervZaprosColbeck();
  }, []);

  return (
    <div className="App">
      <div className="app-wrapper">
        <div className="header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="main">
          <div className="dumi">
            <Sidebar setFilterColbeck={setFilterColbeck} filter={filter} />
          </div>
          <Filter2
            sorterHandlerColbeck={sorterHandlerColbeck}
            sorterlowprice={sorterlowprice}
            sorterfaster={sorterfaster}
            sorteroptim={sorteroptim}
          />
          <Tickets
            sortTickets={sortTickets}
            stop={stop}
            uuidv4={uuidv4}
            onButtonClickColbeck={onButtonClickColbeck}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
