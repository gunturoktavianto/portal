//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

// kalau ada waktu, coba mongodb, import mongoose
let arrPostJasaTitip = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
// request response using json format
app.use(express.json());

// Routing: kalau ada waktu, try separating router and controller functions
// -> more easy dev & scalable features
app.get("/", function (req, res) {
  res.render("home");
});

app.get("/portal", function (req, res) {
  res.render("portal");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/formjastip", function (req, res) {
  res.render("formjastip");
});

app.post("/formjastip", function (req, res) {
  const postJasaTitip = {
    namaToko: req.body.postNamaToko,
    tanggal: req.body.postTanggal,
    waktu: req.body.postPukul,
    tujuan: req.body.postTujuan,
    link: req.body.postLink,
  };

  arrPostJasaTitip.push(postJasaTitip);
  res.redirect("/jasatitip");
});

app.get("/jasatitip", function (req, res) {
  res.render("jasatitip", { arrPostJasaTitip: arrPostJasaTitip });
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
