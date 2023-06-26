import axios from './axios'
export const getStreet = async ({ search_street, city_id }) => {
  const response = await axios.get(`http://${window.location.host}/api/street_search`, {
    params: {
      requestedStreet: search_street ,
      cityId: city_id
    },
    withCredentials: true, timeout: 15000
  })
  return response.data
}