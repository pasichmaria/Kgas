import axioslib from 'axios'

export const axios = axioslib.create({
  baseURL: process.env.REACT_APP_BASE_URL
})
axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error.response.status === 401 || error.response.status === 419) {
      localStorage.removeItem('token')
      window.location.href = '/login'
      usehistory.push("/login");
    }
    return Promise.reject(error)
  }
)
axios.interceptors.request.use(function (config) {
  config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`
  return config
})
export default axios
