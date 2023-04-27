import { axios } from './axios'

export async function getUser() {
  const response = await axios.get(`http://localhost:3001/users/me`)
  return response.data
}
