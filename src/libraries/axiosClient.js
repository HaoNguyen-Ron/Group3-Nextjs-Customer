import axios from "axios";

// import { REFRESH_TOKEN, TOKEN } from "../constants";

const axiosClient = axios.create({
  baseURL: 'https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json',
  headers: { "Content-Type": "application/json" },
});