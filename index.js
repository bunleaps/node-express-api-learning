import express from "express";
import bodyParser from "body-parser";
import router from "./routes/users.js";
import mongoose from "mongoose";

const app = express();
const port = 3000;
const DATABASE_URL =
  "mongodb+srv://learndbnodejs:learndbnodejs@cluster0.zu2p3.mongodb.net/?retryWrites=true&w=majority";

// MongoDB || Mongoose --------------------------------
mongoose.set("strictQuery", true);
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const database = mongoose.connection;
database.on("error", console.error.bind(console, "Connection Error"));
database.once("open", function () {
  console.log("Database Connected");
});

// Express App Routes --------------------------------
app.use(bodyParser.json());
app.use("/user", router);
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) =>
  res.send("You've tried reaching a route that doesn't exist.")
);

// Server Start --------------------------------
app.listen(port, () => console.log(`Listening on port ${port}`));
