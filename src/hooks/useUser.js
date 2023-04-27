import { useState } from 'react'
import { useQuery } from 'react-query'

import { getUser } from '../API/userAPI'

export const useUser = () => {
  const [user, setUser] = useState()

  const userQuery = useQuery(['user'], () => getUser(), {
    onError: (error) => {
      console.log(error.response.data)
    },
    onSuccess: (data) => {
      setUser(data)
    },
    enabled: !!localStorage.getItem('token')
  })
  return { getUser: userQuery.refetch, setUser, user }
}
