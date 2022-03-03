require("fix-esm").register();
var express = require("express");
var cors = require("cors");
var app = express();
const path = require("path");
const fs = require("fs");
var Bd = require("./Bd.js");
var globaldata = require("./globaldata.js");
var saveme;

app.use(cors());
app.use(express.json());

const PORT = 5000;

const testsearchId = {
  searchId: "ticket",
};

// console.log(testsPostTiket);

app.use(express.static(__dirname + "/build"));

app.get("/t", (req, res) => {
  res.json(testsearchId);
});
app.get("/ticket", (req, res) => {
  res.json(Bd.TicketsMasiv2);
});
app.get("/testsPostTikettt", (req, res) => {
  res.json(globaldata);
});
app.post("/profile", async function (req, res, next) {
  globaldata = req.body;
  saveme = globaldata;
  res.json(req.body);
  // console.log(globaldata);
  // end.status(200).json("сервер работает");
});
// var testsPostTiket = [globaldata];
// console.log(globaldata);
app.use(
  express.static(path.join("/", "максим", "авиасейл", "my-app") + "/build")
);
app.get("/*", function (req, res) {
  res.sendFile(
    path.join("/", "максим", "авиасейл", "my-app", "build", "index.html")
  );
});

app.listen(PORT, () => console.log("dasfs"));
console.log("ssdsjfjfdggfhdfufdsd");
console.log(__dirname);
console.log(saveme);
