import axioslib from 'axios'
import { useNavigate } from 'react-router-dom'

export const axios = axioslib.create({
  baseURL: process.env.REACT_APP_BASE_URL
})
const handleUnauthorized = () => {
  const navigate = useNavigate()
  localStorage.removeItem('token')
  navigate('/login')
}
axios.interceptors.response.use(
  function(response) {
    return response
  },
  function(error) {

    const navigate = useNavigate()
    if (error.response) {
      if (error.response.status === 401 || error.response.status === 419) {
        handleUnauthorized()
      }
    }
    return Promise.reject(error)
  }
)

axios.defaults.withCredentials = true
axios.interceptors.request.use(
  function(config) {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    config.xsrfHeaderName = 'X-XSRF-TOKEN';
    config.withCredentials = true;
    config.timeout = 15000
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
export default axios
