//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

// kalau ada waktu, coba mongodb, import mongoose
let arrPostJasaTitip = [];
let arrPostJasaAntre = [];
let arrPostKuyBareng = [];



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

app.get("/form-jasa-titip", function (req, res) {
  res.render("formjasatitip");
});

app.get("/form-jasa-antre", function (req, res) {
  res.render("formjasaantre");
});

app.get("/form-kuy-bareng", function (req, res) {
  res.render("formkuybareng");
});

app.post("/form-jasa-titip", function (req, res) {
  const postJasaTitip = {
    namaToko: req.body.postNamaToko,
    tanggal: req.body.postTanggal,
    waktu: req.body.postPukul,
    tujuan: req.body.postTujuan,
    link: req.body.postLink,
  };

  arrPostJasaTitip.push(postJasaTitip);
  res.redirect("jasa-titip");
});

app.post("/form-jasa-antre", function (req, res) {
  const postJasaAntre = {
    namaToko: req.body.postNamaToko,
    tanggal: req.body.postTanggal,
    waktu: req.body.postPukul,
    link: req.body.postLink,
  };

  arrPostJasaAntre.push(postJasaAntre);
  res.redirect("jasa-antre");
});

app.post("/form-kuy-bareng", function (req, res) {
  const postKuyBareng = {
    namaKegiatan: req.body.postNamaKegiatan,
    tanggal: req.body.postTanggal,
    waktu: req.body.postPukul,
    lokasi: req.body.postLokasi,
    link: req.body.postLink,
  };

  arrPostKuyBareng.push(postKuyBareng);
  res.redirect("kuy-bareng");
});

app.get("/jasa-titip", function (req, res) {
  res.render("jasatitip", { arrPostJasaTitip: arrPostJasaTitip });
});

app.get("/jasa-antre", function (req, res) {
  res.render("jasaantre", { arrPostJasaAntre: arrPostJasaAntre });
});

app.get("/kuy-bareng", function (req, res) {
  res.render("kuybareng", { arrPostKuyBareng: arrPostKuyBareng });
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
