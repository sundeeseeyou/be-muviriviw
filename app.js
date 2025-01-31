import express from "express";
import axios from "axios";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { fetchData, storeData, getMovie } from "./data/posts.js";

const app = express();
dotenv.config();
const PORT = process.env.SERVER_PORT;

const API_URL = process.env.API_KEY;
const API_KEY = process.env.API_KEY;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

let fetchResult;

app.get("/", async (req, res) => {
  const movieList = await fetchData();
  res.json({ blog: movieList });
});

app.post("/request", async (req, res) => {
  const idImdb = req.body.movieid;

  try {
    const result = await axios.get(API_URL, {
      params: {
        apiKey: API_KEY,
        i: idImdb,
      },
    });
    console.log(result);
  } catch (error) {}

  res.json(200);
});

app.listen(PORT, () => {
  console.log(
    "Server is running on port " +
      PORT +
      " Click here to see " +
      `http://localhost:${PORT}`
  );
});
