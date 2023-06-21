import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (_req, res) => {
  res.send("It works!");
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
