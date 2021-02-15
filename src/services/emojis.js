import axios from "axios";
require("dotenv").config();

const API_KEY = process.env.REACT_APP_EMOJI_API;

const baseUrl = `https://emoji-api.com/emojis?access_key=${API_KEY}`;

const getAll = async () => {
  const response = await axios.get(baseUrl);
  // console.log(response.data);
  return response.data;
};

const getEmoji = async (slug) => {
  const response = await axios.get(
    `https://emoji-api.com/emojis/${slug}?access_key=${API_KEY}`
  );
  // console.log("service", response.data);
  return response.data;
};

export default { getAll, getEmoji };
