import axios from "axios";
import { useEffect, useMemo, useRef, useState } from "react";
import { ticketNormalize } from "./ticketNormalize";
import { allSorter } from "./allSorter";
import { filterTickets } from "./filterTickets";

export function useTicketNormalize() {
  const LOW_PRICE = "lowprice";
  const FASTER_PRICE = "faster";
  const OPTIM_PRICE = "optim";

  const [pervZapros, setpervZapros] = useState(false);
  const pervZaprosColbeck = () => setpervZapros(true);

  const [searchId, setSearchId] = useState();
  const [tickets, settickets] = useState([]);
  const [stop, setStop] = useState(false);
  let clonTickets = useRef([]);
  let schet = useRef(0);
  const [sortTickets, setsortTickets] = useState([]);
  const [sorterlowprice, setsorterlowprice] = useState(false);
  const [sorterfaster, setsorterfaster] = useState(false);
  const [sorteroptim, setsorteroptim] = useState(false);
  const [filter, setFilter] = useState({
    all: true,
    without: false,
    one: false,
    two: false,
    three: false,
  });
  const setFilterColbeck = (x) => setFilter(x);
  ///
  //TODO:  юз эфект при нажатии на фильтры топ меню и сайд бар создается новый клон.
  useEffect(() => {
    if (!searchId) {
      subscribeSearchId();
    } else if (searchId && stop === false) {
      subscribe();
    } else if (stop) {
      clonTickets.current = [...tickets];
      schet.current = 0;
      setsortTickets(
        ticketNormalize(
          filterTickets(
            allSorter(
              clonTickets.current,
              sorterlowprice,
              sorterfaster,
              sorteroptim
            ),
            filter
          ).slice(0, 5)
        )
      );
      // console.log(clonTickets);
    }
  }, [searchId, tickets, filter]);

  useEffect(() => {
    setFilterTopMenu(sorterlowprice, sorterfaster, sorteroptim);
  }, [sorterlowprice, sorterfaster, sorteroptim]);
  ////
  //TODO: колбек при нажатии подгрузка
  const onButtonClickColbeck = () => {
    schet.current = schet.current + 5;
    setsortTickets((prev) => [
      ...prev,
      ...ticketNormalize(
        filterTickets(clonTickets.current, filter).slice(
          0 + schet.current,
          5 + schet.current
        )
      ),
    ]);
  };
  ////
  //TODO:запросы 1-"https://front-test.beta.aviasales.ru/search" 2-`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`
  function subscribeSearchId() {
    // try {
    //   const searchIdPart = await axios.get("http://localhost:5000");
    //   setSearchId(searchIdPart.data.title);
    //   console.log(searchIdPart.data.title);
    // } catch (e) {
    //   console.log(e);
    // }

    fetch("http://localhost:5000/t")
      .then((res) => res.json())
      .then((res) => {
        console.log("res:", res);
        setSearchId(res.searchId);
      })
      .catch((e) => console.log(e));
  }
  async function subscribe() {
    // front-test.beta.aviasales.ru/tickets?searchId=4niyd
    try {
      const url = `http://localhost:5000/${searchId}`;
      const ticketsPart = await axios.get(url);
      // @ts-ignore
      if (ticketsPart.data.stop) {
        setStop(true);
      }
      settickets((prev) => [...prev, ...ticketsPart.data.tickets]);
      console.log(ticketsPart);
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
  //////
  //TODO: sorterHandlerTopMenu-передается компоненте как колбек.setFilterTopMenu-передается в юзэфект
  const sorterHandlerColbeck = (x) => sorterHandlerTopMenu(x);
  function sorterHandlerTopMenu(sortedButton) {
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
  }
  function setFilterTopMenu(sorterlowprice, sorterfaster, sorteroptim) {
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
  }

  return {
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
  };
}
