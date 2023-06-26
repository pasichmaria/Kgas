import axios from './axios'
export const getCity = async ({search_city ,  department_id }) => {
  const response = await axios.get(`http://${window.location.host}/api/city_search`, {
    params: {
      requestedCity : search_city,
      departmentId: department_id
    },
    withCredentials: true, timeout: 15000
  })
  return response.data
}