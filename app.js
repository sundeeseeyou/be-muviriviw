import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(
    "Server is running on port " +
      PORT +
      " Click here to see " +
      `http://localhost:${PORT}`
  );
});
