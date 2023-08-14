import axioslib from 'axios'
import { useNavigate } from 'react-router-dom'

export const axios = axioslib.create({
  baseURL: process.env.REACT_APP_BASE_URL
})
const handleUnauthorized = () => {
  const navigate = useNavigate()
  localStorage.removeItem('token')
  history.push('/login');
}
axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if ( error.response.status === 401 || error.response.status === 419) {
      window.location.replace('/403')
      handleUnauthorized()
    } else if ( error.response.status === 404) {
      window.location.replace('/404')
    } else if ( error.response.status === 500) {
      window.location.replace('/500')
    }
    return Promise.reject(error);
  }
);

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
