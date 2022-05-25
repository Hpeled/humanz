const express = require("express");
const mongoose = require("mongoose");
const db = require("./config/db");
const app = express();
const clientController = require("./controllers/client.controller");
app.use(express.json());

app.use("/api", clientController);
app.listen(3000, async () => {
  try {
    const connection = await mongoose.connect(db.uri, {
      useNewUrlParser: true,
    });
    console.log("server is up ");
  } catch (err) {
    console.log(err);
    console.log("error in database");
    process.exit(0);
  }
});
