const mongoose = require("mongoose");
const { urlDB } = require("../config");

mongoose.connect(urlDB)
  .then(() => console.log("connect to mongoDB"))
  .catch(err => console.log(err));

const db = mongoose.connection;

module.exports = db;
