const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("연결 완료");
  })
  .catch((err) => {
    console.error(err);
  });

app.get("/", (req, res, next) => {
  res.send("hello");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.use("/users", require("./routes/users"));

app.use((error, req, res, next) => {
  res.status(err.status || 500);
  res.send(error.message || "서버에서 에러가 났습니다");
});

app.use(express.static(path.join(__dirname, "../uploads")));

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} 🔥`);
});
