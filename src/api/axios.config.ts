import axios from "axios";

export const API_INSTANCE = axios.create({
  baseURL: "https://fakestoreapi.com",
});
