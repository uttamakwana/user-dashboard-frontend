import axios from "axios";

// Create a new Axios instance
const api = axios.create({
  baseURL: "http://localhost:5001/api", // Set the base URL for your API
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;