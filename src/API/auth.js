import axios from "./axios";

export async function login({ email, password }) {
  const response = await axios.post("http://localhost:3000/user", {
    email,
    password,
  })
  return response.data;
}