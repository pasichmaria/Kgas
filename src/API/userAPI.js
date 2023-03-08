import { axios } from "./axios";

export async function getUser() {
  const response = await axios.get("http://localhost:3000/user");
  return response.data;
}
