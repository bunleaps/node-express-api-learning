import express from "express";
import bodyParser from "body-parser";
import router from "./routes/users.js";

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use("/user", router);

app.get("/", (req, res) => res.send("Welcome to the Users API!"));

app.all("*", (req, res) =>
  res.send("You've tried reaching a route that doesn't exist.")
);

app.listen(port, () => console.log(`Listening on port ${port}`));
