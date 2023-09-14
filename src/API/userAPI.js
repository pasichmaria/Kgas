import { axios } from './axios'
export async function getUser() {
  const response = await axios.get(`http://${window.location.host}/api/users/me`)
  return response.data
}