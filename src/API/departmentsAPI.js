import axios from './axios'
export const getDepartments = async  ({ regionId  }) => {

  const response = await axios.get(`http://${window.location.host}/api/department_search`,
  {
    params: {
      regionId,
    },
    withCredentials : true , timeout : 15000
  },
)
  return (response.data)
}