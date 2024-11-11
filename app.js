const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const user = require("./app/api/v1/users/routes/user.route");
const cors = require("cors");

const app = express();
app.use(cors());

const link = "/api/v1";

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get(link, (req, res) =>
  res.status(200).json({ status: "success", message: "Hi" })
);



app.use(link, user);

module.exports = app;
