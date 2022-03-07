module.exports = {
  TicketsMasiv2: {
    stop: true,
    tickets: [
      {
        id: 1,
        price: 12523,
        carrier: "FB",
        segments: [
          {
            origin: "MOW",
            destination: "HKT",
            date: "2020-05-19T14:58:00.000Z",
            stops: ["SKK", "Gh"],
            duration: 2111,
          },
          {
            origin: "MOW",
            destination: "HKT",
            date: "2020-06-08T16:29:00.000Z",
            stops: ["SKK", "Gh"],
            duration: 15801,
          },
        ],
      },
      {
        id: 2,
        price: 25600,
        carrier: "FV",
        segments: [
          {
            origin: "Владивосток",
            destination: "Сахалин",
            date: "2020-05-19T11:18:00.000Z",
            stops: [],
            duration: 67,
          },
          {
            origin: "MOW",
            destination: "HKT",
            date: "2020-06-08T18:39:00.000Z",
            stops: [],
            duration: 10,
          },
        ],
      },
      {
        id: 3,
        price: 20600,
        carrier: "FQ",
        segments: [
          {
            origin: "MOW",
            destination: "HKT",
            date: "2020-05-19T11:18:00.000Z",
            stops: ["AK"],
            duration: 67,
          },
          {
            origin: "MOW",
            destination: "HKT",
            date: "2020-06-08T18:39:00.000Z",
            stops: ["BKK"],
            duration: 80,
          },
        ],
      },
      {
        id: 4,
        price: 300,
        carrier: "FR",
        segments: [
          {
            origin: "MOW",
            destination: "HKT",
            date: "2020-05-19T11:18:00.000Z",
            stops: ["AK", "BKK", "BH"],
            duration: 867,
          },
          {
            origin: "MOW",
            destination: "HKT",
            date: "2020-06-08T18:39:00.000Z",
            stops: ["AK", "BKK", "BH"],
            duration: 600,
          },
        ],
      },
      {
        id: 5,
        price: 22600,
        carrier: "FX",
        segments: [
          {
            origin: "MOW",
            destination: "HKT",
            date: "2020-05-19T11:18:00.000Z",
            stops: [],
            duration: 867,
          },
          {
            origin: "MOW",
            destination: "HKT",
            date: "2020-06-08T18:39:00.000Z",
            stops: [],
            duration: 600,
          },
        ],
      },
      {
        id: 6,
        price: 212600,
        carrier: "FS",
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
      {
        id: 7,
        price: 600,
        carrier: "FP",
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
};
