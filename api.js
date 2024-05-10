const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const auth = require("./routes/auth.js");
const marquee = require("./routes/marqueee.js");
const reservations = require("./routes/reservations.js");

require("dotenv").config();

const app = express();

// parse Data
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use("/auth", auth);
app.use("/marquee", marquee);
app.use("/reservations", reservations);

async function main() {
  await mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.4bmc3q8.mongodb.net/motel-develpoment-db?retryWrites=true&w=majority`
  );
  try {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
    console.log("MongoDB connected By Mongo Client Sk Miraj!");
  } catch (err) {
    console.log(err);
  }
}

app.get("/", (req, res) => {
  res.send(` Hello Express is server Working on ${process.env.PORT}`);
});

main();
