import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
import { fetchData, storeData } from "./data/posts.js";

const app = express();
dotenv.config();
const PORT = process.env.SERVER_PORT;

const API_URL = process.env.API_KEY;
const API_KEY = process.env.API_KEY;

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const movieList = await fetchData();
  res.json({ blog: movieList });
});

app.listen(PORT, () => {
  console.log(
    "Server is running on port " +
      PORT +
      " Click here to see " +
      `http://localhost:${PORT}`
  );
});
