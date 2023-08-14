import axios from './axios'
export const getDepartments = async  ({ regionId  }) => {
  return[
    {
      "id": 1,
      "department_name": "Київсвят",
      "region_id": 1,
      "created_at": "2023-05-31T07:40:59.000000Z",
      "updated_at": "2023-05-31T07:40:59.000000Z"
    }
  ]

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