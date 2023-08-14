import axios from './axios'

export async function login({ email, password }) {
  const response = await axios.post(`http://${window.location.host}/api/auth/login`, {
    email, password
  }, { withCredentials: true, timeout: 15000 })
  return response.data.token
}

export async function  sendFeedback  ({ message, feedback, act_number }) {
  const response = await axios.post(`http://${window.location.host}/api/feedback`, {
    message, feedback, act_number
  }, { withCredentials: true, timeout: 15000 })
  return response.data
}