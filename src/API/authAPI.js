import axios from './axios'

export async function login({ email, password }) {
  const response = await axios.post('http://localhost:3001/auth/login', {
    email,
    password
  })
  return response.data
}
