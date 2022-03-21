require("fix-esm").register();
var express = require("express");
var cors = require("cors");
var app = express();
const path = require("path");
const fileUpload = require("express-fileupload");
const morgan = require("morgan");
const fs = require("fs");
var Bd = require("./Bd.js");
var Bd2 = require("./bd.json");
var globaldata = require("./globaldata.js");

var saveme;

app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use(express.urlencoded({ extended: false }));
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
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
  res.json(globaldata.masiv);
});
app.post("/profile", async function (req, res, next) {
  globaldata.masiv = [...globaldata.masiv, ...req.body];
  saveme = globaldata;
  res.json(req.body);
  // console.log(globaldata);
  // end.status(200).json("сервер работает");
});
app.delete("/writer", function (req, res) {
  globaldata.masiv = [];
  res.json("delete");
});
app.put("/putprice/:id", function (req, res) {
  let id = +req.params.id;
  let bodi = Bd.TicketsMasiv2.tickets;
  let ttt = bodi.map((item) => {
    if (item.id === id) {
      item.price = req.body.body;
      return item;
    } else {
      return item;
    }
  });
  Bd.TicketsMasiv2.tickets = [...ttt];
  // let json = JSON.stringify([...ttt]);
  // fs.writeFile("bd.json", json, function (err) {
  //   if (err) throw err;
  //   console.log("complete");
  // });
  // fs.readFile("bd.json", "utf8", function readFileCallback(err, data) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     obj = JSON.parse(data); //now it an object
  //     // obj.table.push({ id: 2, square: 3 }); //add some data
  //     // json = JSON.stringify(obj); //convert it back to json
  //     // fs.writeFile("myjsonfile.json", json, "utf8", callback); // write it back
  //   }
  // });
  // Bd2 = [...ttt];
  // res.json(bodi);
  res.json(Bd);
});
// app.put("/putprice/:id", function (req, res) {
//   let id = +req.params.id;
//   let bodi = globaldata.masiv;
//   let ttt = bodi.map((item) => {
//     if (item.id === id) {
//       item.price = req.body.body;
//       return item;
//     } else {
//       return item;
//     }
//   });
//   globaldata.masiv = [...ttt];
//   // res.json(bodi);
//   res.json(req.body.body);
// });
var testsPostTiket = [globaldata];
console.log(globaldata);
app.use(
  express.static(path.join("/", "максим", "авиасейл", "my-app") + "/build")
);
app.get("/*", function (req, res) {
  res.sendFile(
    path.join("/", "максим", "авиасейл", "my-app", "build", "index.html")
  );
});

app.listen(PORT, () => console.log("dasfs"));
console.log("ssdsjfjf3sasdgegуhcdfufdsd");
console.log(__dirname);
console.log(saveme);
