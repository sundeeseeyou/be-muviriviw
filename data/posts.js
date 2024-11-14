import axios from "axios";
import { readFile, writeFile } from "node:fs/promises";

export async function fetchData() {
  try {
    const rawFileContent = await readFile("blog.json", { encoding: "utf-8" });
    const data = JSON.parse(rawFileContent);
    return data.blog ?? [];
  } catch (error) {
    console.error("Error reading posts:", error);
    return []; // Return an empty array if file is not found or JSON is invalid
  }
}

export function storeData(posts) {
  return writeFile(
    "movie-list.json",
    JSON.stringify({ posts: posts || [] }, null, 2)
  ); // Adds spacing for readability
}

export async function getMovie() {
  //Fetching data from API and store it on Array
  const title = req.body.movietitle;
  try {
    await axios.get(API_URL, {
      params: {
        apiKey: API_KEY,
        t: title,
      },
    });
  } catch (error) {}
}
