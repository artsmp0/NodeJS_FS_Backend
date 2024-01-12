const express = require("express");
const cors = require("cors");
const userRouter = require("../router/userRouter");

const app = express();
// use middleware to from our contract for incoming json payloads ONLY !!!
app.use(express.json());
// use middleware for url encoding
app.use(express.urlencoded({ extended: true }));
// use middleware to handle cors policy
app.use(cors());
/* 
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
  }
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});
*/

// health point or actuator
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

// add routes
app.use("/users", userRouter);

// bad url or error we can handle with middleware
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
      status: error.status,
    },
  });
});

module.exports = app;
