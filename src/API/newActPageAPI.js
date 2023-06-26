import axios from './axios'
export const getAllInfo = async () => {
  const response = await axios.get(`http://${window.location.host}/api/allInfo`, {
    withCredentials: true, timeout: 15000
  })
  return (response.data)
}
