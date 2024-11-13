import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
const PORT = 3030;
dotenv.config();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hellow" });
  console.log(PORT);
});

app.listen(PORT, () => {
  console.log(
    "Server is running on port " +
      PORT +
      " Click here to see " +
      `http://localhost:${PORT}`
  );
});
