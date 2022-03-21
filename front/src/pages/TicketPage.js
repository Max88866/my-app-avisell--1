import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTicketNormalize } from "../helper/useTicketNormalize.js";
import { Sidebar } from "../components/Sidebar";
import { Filter2 } from "../components/Filter2";
import { Tickets } from "../components/Tickets";
export function TicketPage() {
  const {
    sorterlowprice,
    sorterfaster,
    sorteroptim,
    onButtonClickColbeck,
    sortTickets,
    // sortTicketsRedux,
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
    // <div className="App">
    // <div className="app-wrapper">
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
      <div>
        <Tickets
          sortTickets={sortTickets}
          uuidv4={uuidv4}
          stop={stop}
          // onButtonClickColbeck={onButtonClickColbeck}
        />
        {stop ? (
          <input
            style={{
              // display: "block",
              marginTop: "20px",
            }}
            className="inputButtonLoud"
            type="button"
            value="Показать еще 5 билетов!"
            onClick={() => onButtonClickColbeck()}
          ></input>
        ) : null}
      </div>
    </div>
    // </div>
    // </div>
  );
}