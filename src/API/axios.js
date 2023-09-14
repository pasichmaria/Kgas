import axioslib from 'axios'
import { useNavigate } from 'react-router-dom'

export const axios = axioslib.create({
  baseURL: process.env.REACT_APP_BASE_URL
})
const handleUnauthorized = () => {
  const navigate = useNavigate()
  sessionStorage.removeItem('token')
  history.push('/login');
}
axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if ( error.response.status === 401 || error.response.status === 419) {
      handleUnauthorized()
      console.log('unauthorized')

    } else if ( error.response.status === 404) {
      return Promise.reject(error);
      console.log('not found')

    } else if ( error.response.status === 500) {
      return Promise.reject(error);
      console.log('server error')

    } else if ( error.response.status === 422) {
      return Promise.reject(error);
      console.log('validation error')
    }
    return Promise.reject(error);
  }
);

axios.defaults.withCredentials = true
axios.interceptors.request.use(
  function(config) {
    const token = sessionStorage.getItem('token');
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
