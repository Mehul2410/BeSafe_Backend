const cors = require("cors");
const express = require("express");
const { APP_PORT, DBURL } = require("./config");
const errorHandler = require("./middleware/errorHandler");
const router = require("./routes");

const mongoose = require("mongoose");

const app = express();

const corsOptions = {
  credentials: true,
  origin: [
    "http://localhost:3000",
    "http://localhost:19002/",
    "http://192.168.0.108:19002/",
  ],
};

mongoose.connect(DBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => console.log("Db Connected"));
// app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api", router);

app.use(errorHandler);

app.listen(APP_PORT, () => {
  console.log(`listening on port ${APP_PORT}`);
});