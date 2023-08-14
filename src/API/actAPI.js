import axios from './axios'

export const getActByNumber = async ({ id }) => {
  const response = await axios.get(`http://${window.location.host}/api/act?id=${id}`, {
    withCredentials: true, timeout: 15000
  })
  return response.data
}
export const getAllActs = async ({ currentPage, perPage, total, searchValue }) => {
  const response = await axios.get(`http://${window.location.host}/api/acts`, { withCredentials: true, timeout: 15000 })
  return response.data
}
export const getLabAct = async ({ id }) => {
  const response = await axios.get(`http://${window.location.host}/api/labAct?id=${id}`, {
    withCredentials: true, timeout: 15000
  })
  return response.data
}