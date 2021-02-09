import axios from "axios";
require("dotenv").config();

const API_KEY = process.env.REACT_APP_EMOJI_API;

const baseUrl = `https://emoji-api.com/emojis?access_key=${API_KEY}`;

const getAll = async () => {
  const response = await axios.get(baseUrl);
  console.log(response.data);
  return response.data;
};

export default { getAll };
