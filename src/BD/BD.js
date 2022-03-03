// @ts-ignore
import avialogo from "../assets/avialogo.svg";

const TicketsMasiv = [
  {
    stop: true,
    tickets: [
      {
        id: uuidv4(),
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
        id: uuidv4(),
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
    ],
  },
];
