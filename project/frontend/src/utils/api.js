import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const loginAPI = async (email, password) => {
  const { data } = await API.post("/auth/login", { email, password });
  return data;
};

export const getPendingStartups = async () => {
  const { data } = await API.get("/admin/pending-startups");
  return data;
};

export const approveStartup = async (id) => {
  await API.post(`/admin/approve-startup/${id}`);
};
