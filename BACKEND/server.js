const dns = require('dns');
dns.setServers(['1.1.1.1', '8.8.8.8']);

const express = require("express");
const app = express();
const cors = require('cors');
require("dotenv").config();

const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const { createAccount, login } = require("./controllers/user");

app.use(cors({
  origin: "https://fullproject-x2o5.vercel.app",
  credentials: true
}));

app.use(express.json());

app.post("/signup", createAccount);
app.post("/login", login);

mongoose.connect(process.env.mongoose_url)
  .then(() => {
    app.listen(port, () => {
      console.log(`server is running port number is ${port}`);
      console.log("mongoosedb connected");
    });
  })
  .catch((error) => {
    console.log("mongoosedb not connected", error);
  });
