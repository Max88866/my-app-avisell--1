var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());

const PORT = 5000;

const testsearchId = {
  searchId: "ticket",
};
const TicketsMasiv = {
  stop: true,
  tickets: [
    {
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
      price: 20600,
      carrier: "FV",
      segments: [
        {
          origin: "MOW",
          destination: "HKT",
          date: "2020-05-19T11:18:00.000Z",
          stops: [],
          duration: 7967,
        },
        {
          origin: "MOW",
          destination: "HKT",
          date: "2020-06-08T18:39:00.000Z",
          stops: [],
          duration: 6600,
        },
      ],
    },
    {
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
};

app.get("/", (req, res) => {
  res.json(testsearchId);
});
app.get("/ticket", (req, res) => {
  res.json(TicketsMasiv);
  // res.json(TicketsMasiv2);
});

app.listen(PORT, () => console.log("dasfs"));
console.log("sdasdsfsdfdf");
