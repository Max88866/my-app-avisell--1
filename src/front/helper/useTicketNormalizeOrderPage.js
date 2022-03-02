import axios from "axios";
import { useEffect, useMemo, useRef, useState } from "react";
import { ticketNormalize } from "./ticketNormalize";
import { allSorter } from "./allSorter";
import { filterTickets } from "./filterTickets";
// @ts-ignore
// import logo512 from "../assets/logo512.png";

export function useTicketNormalizeOrderPage() {
  // const LOW_PRICE = "lowprice";
  // const FASTER_PRICE = "faster";
  // const OPTIM_PRICE = "optim";

  const [pervZapros, setpervZapros] = useState(false);
  const pervZaprosColbeck = () => setpervZapros(true);

  // const [searchId, setSearchId] = useState();
  const [tickets, settickets] = useState([
    {
      price: 12523,
      carrier: "FB",
      segments: [
        {
          origin: "MOW",
          destination: "HKT",
          date: "2020-05-19T14:58:00.000Z",
          stops: [],
          duration: 2111,
        },
        {
          origin: "MOW",
          destination: "HKT",
          date: "2020-06-08T16:29:00.000Z",
          stops: ["SKK", "Gh"],
          duration: 1501,
        },
      ],
    },
    {
      price: 20600,
      carrier: "FV",
      segments: [
        {
          origin: "MOW",
          destination: "HKT",
          date: "2020-05-19T11:18:00.000Z",
          stops: ["AK"],
          duration: 867,
        },
        {
          origin: "MOW",
          destination: "HKT",
          date: "2020-06-08T18:39:00.000Z",
          stops: ["BKK", "BH"],
          duration: 600,
        },
      ],
    },
  ]);
  const [stop, setStop] = useState(true);
  // let clonTickets = useRef([]);
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
    // if (!searchId) {
    //   subscribeSearchId();
    // } else if (searchId && stop === false) {
    //   subscribe();
    // } else if (stop) {
    // clonTickets.current = [...tickets];
    // schet.current = 0;
    setsortTickets(
      ticketNormalize(
        filterTickets(
          allSorter(tickets, sorterlowprice, sorterfaster, sorteroptim),
          filter
        )
      )
    );
    // console.log(clonTickets);
  }, []);

  // useEffect(() => {
  //   setFilterTopMenu(sorterlowprice, sorterfaster, sorteroptim);
  // }, [sorterlowprice, sorterfaster, sorteroptim]);
  ////
  //TODO: колбек при нажатии подгрузка
  const onButtonClickColbeck = () => {
    schet.current = schet.current + 5;
    setsortTickets((prev) => [
      ...prev,
      ...ticketNormalize(
        filterTickets(tickets, filter).slice(
          0 + schet.current,
          5 + schet.current
        )
      ),
    ]);
  };
  //
  //TODO:запросы
  // function subscribeSearchId() {
  //   fetch("https://front-test.beta.aviasales.ru/search")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log("res:", res);
  //       setSearchId(res.searchId);
  //     })
  //     .catch((e) => console.log(e));
  // }
  // async function subscribe() {
  //   try {
  //     const url = `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`;
  //     const ticketsPart = await axios.get(url);
  //     // @ts-ignore
  //     if (ticketsPart.data.stop) {
  //       setStop(true);
  //     }
  //     settickets((prev) => [...prev, ...ticketsPart.data.tickets]);
  //     console.log(ticketsPart.data);
  //     // @ts-ignore
  //   } catch (e) {
  //     setTimeout(() => {
  //       console.log(e);
  //       // if (!stop) {
  //       //   setkye(!kye);
  //       // }
  //       subscribe();
  //     }, 1000);
  //   }
  // }
  //////
  //TODO: sorterHandlerTopMenu-передается компоненте как колбек.setFilterTopMenu-передается в юзэфект
  // const sorterHandlerColbeck = (x) => sorterHandlerTopMenu(x);
  // function sorterHandlerTopMenu(sortedButton) {
  //   switch (sortedButton) {
  //     case LOW_PRICE:
  //       setsorterlowprice(!sorterlowprice);
  //       setsorterfaster(false);
  //       setsorteroptim(false);
  //       break;
  //     case FASTER_PRICE:
  //       setsorterfaster(!sorterfaster);
  //       setsorterlowprice(false);
  //       setsorteroptim(false);
  //       break;
  //     case OPTIM_PRICE:
  //       setsorteroptim(!sorteroptim);
  //       setsorterlowprice(false);
  //       setsorterfaster(false);
  //       break;
  //     default:
  //       break;
  //   }
  // }
  // function setFilterTopMenu(sorterlowprice, sorterfaster, sorteroptim) {
  //   if (sorterlowprice) {
  //     setFilter({
  //       all: true,
  //       without: false,
  //       one: false,
  //       two: false,
  //       three: false,
  //     });
  //   }
  //   if (sorterfaster) {
  //     setFilter({
  //       all: true,
  //       without: false,
  //       one: false,
  //       two: false,
  //       three: false,
  //     });
  //   }
  //   if (sorteroptim) {
  //     setFilter({
  //       all: false,
  //       without: true,
  //       one: false,
  //       two: false,
  //       three: false,
  //     });
  //   }
  // }

  return {
    // sorterlowprice,
    // sorterfaster,
    // sorteroptim,
    onButtonClickColbeck,
    sortTickets,
    stop,
    // setFilterColbeck,
    // filter,
    // sorterHandlerColbeck,
    pervZaprosColbeck,
  };
}
