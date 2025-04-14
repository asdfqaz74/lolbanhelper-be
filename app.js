// 라이브러리 및 프레임워크 로드
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");

// Express 앱 생성
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", indexRouter);
const MONGODB_URI_PROD = process.env.MONGODB_URI_PROD;

// MongoDB 연결
const mongoURI = MONGODB_URI_PROD;
console.log(mongoURI);
mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB 연결 성공"))
  .catch((e) => {
    console.error("MongoDB 연결 실패");
    console.error(e);
  });

// 라우터 연결
app.listen(7000, () => {
  console.log("서버 시작");
});
