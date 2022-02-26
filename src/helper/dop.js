// const [kye, setkye] = useState(false);

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

// function Filter(colb) {
//   const [sorterlowprice, setsorterlowprice] = useState(false);
//   const [sorterfaster, setsorterfaster] = useState(false);
//   const [sorteroptim, setsorteroptim] = useState(false);

// if (sorterlowprice) {
//   return tickets.sort((a, b) => a.price - b.price);
// }
// useEffect(() => {
//   if (sorterlowprice) {
//     colb(sorterlowprice);
//   }
// }, [sorterlowprice]);

// const sorterHandler = (sortedButton) => {
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
// };
// const allSorter = (sortedButton) => {
//   switch (sortedButton) {
//     case LOW_PRICE:
//     console.log(tickets.sort((a, b) => a.price - b.price));
//     return tickets.sort((a, b) => a.price - b.price);
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
// };

//   return (
//     <div className="filter2">
//       <div
//         className={`filter2__element filter2__low-price ${
//           sorterlowprice ? "filter2__element__clicked" : ""
//         }`}
//         onClick={() => {
//           return sorterHandler(LOW_PRICE);
//         }}
//       >
//         Самый дешёвый
//       </div>
//       <div
//         className={`filter2__element filter2__faster ${
//           sorterfaster ? "filter2__element__clicked" : ""
//         }`}
//         onClick={() => sorterHandler(FASTER_PRICE)}
//       >
//         Самый быстрый
//       </div>
//       <div
//         className={`filter2__element filter2__optim ${
//           sorteroptim ? "filter2__element__clicked" : ""
//         }`}
//         onClick={() => sorterHandler(OPTIM_PRICE)}
//       >
//         Оптимальный
//       </div>
//     </div>
//   );
// }

{
  //   new Date(segment.date).getHours() +
  //     ":" +
  //     new Date(segment.date).getMinutes() +
  //     "-" +
  //     new Date(
  //       new Date(segment.date).setHours(
  //         new Date(segment.date).getHours() + Math.ceil(segment.duration / 60)
  //       )
  //     ).getHours() +
  //     ":" +
  //     new Date(
  //       new Date(segment.date).setMinutes(
  //         new Date(segment.date).getMinutes() + segment.duration
  //       )
  //     ).getMinutes();
}
{
  /* <p className="ticket_data__item__grey">{`${segment.origin}-${segment.destination}`}</p> */
}
{
  /* {Math.ceil(segment.duration / 60) +
            " ч - " +
            (segment.duration % 60) +
            " м"} */
}
{
  /* {segment.stops.length === 0
            ? "Без пересадок"
            : segment.stops.length === 1
            ? "1 Пересадка"
            : segment.stops.length >= 2
            ? `${segment.stops.length} пересадки`
            : ""} */
}
{
  /* <p>{segment.stops.join(", ")}</p> */
}

// clonTicketsSort.current.sort(
//   (a, b) =>
//     Number(a.segments[0].stops.length) +
//     Number(a.segments[1].stops.length) -
//     (Number(b.segments[0].stops.length) +
//       Number(b.segments[1].stops.length))
// );
// useEffect(() => {
// if (sorterlowprice) {
//   clonTicketsSort.current = [...tickets];
//   schet.current = 0;
//   clonTicketsSort.current.sort((a, b) => a.price - b.price);
//   console.log(sorterlowprice);

//   setsortTickets([...ticketNormalize(clonTicketsSort.current.slice(0, 5))]);
// }
// if (sorterfaster) {
//   clonTicketsSort.current = [...tickets];
//   schet.current = 0;
//   clonTicketsSort.current.sort(
//     (a, b) =>
//       Number(a.segments[0].duration) +
//       Number(a.segments[1].duration) -
//       (Number(b.segments[0].duration) + Number(b.segments[1].duration))
//   );

//   setsortTickets([...ticketNormalize(clonTicketsSort.current.slice(0, 5))]);
// }

// if (sorteroptim) {
//   clonTicketsSort.current = [...sortTickets];
//   schet.current = 0;
// function rt (clonTicketsSort) {return clonTicketsSort.current.filter(el=>true)}

// setsortTickets([
//   ...ticketNormalize((sortTickets) =>
//     sortTickets.filter((el) => true)
//   ).slice(0, 5),
// ]);
// clonTicketsSort.current = [...tickets];
// clonTicketsSort.current = [...tickets];
// schet.current = 0;
// console.log(clonTicketsSort.current);
// clonTicketsSort.current.sort((a, b) => b.price - a.price);

// clonTicketsSort.current.filter(
//   (ticket) => ticket.segments[0].stops.length === 3
// );
// setsortTickets([...ticketNormalize(clonTicketsSort.current.slice(0, 5))]);
// clonTicketsSort.current.sort((a, b) => a.price - b.price);
// console.log(clonTicketsSort.current);
// setsortTickets([...ticketNormalize(tickets.slice(0, 5))]);
//   }
// }, [sorteroptim]);
// }

// if (clonTicketsSort.current.length === 0) {
//   setsortTickets((prev) => [
//     ...prev,
//     ...ticketNormalize(
//       filterTickets(tickets).slice(0 + schet.current, 5 + schet.current)
//     ),
//   ]);
// }
