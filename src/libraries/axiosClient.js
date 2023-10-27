import axios from "axios";

export const axiosClient = axios.create({
  baseURL: 'https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json',
  headers: { "Content-Type": "application/json" },
});