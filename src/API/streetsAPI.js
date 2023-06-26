import axios from './axios'

export const getStreet = async ({ search_street, city_id }) => {
  const response = await axios.get(`http://${window.location.host}/api/street_search`, {
    params: {
      requestedStreet: search_street , cityId: city_id
    },
    withCredentials: true, timeout: 15000
  })
  return response.data
}
//http://127.0.0.1:8000/api/street_search?requestedStreet=%D0%92%D0%B0%D1%81&cityId=2