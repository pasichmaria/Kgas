import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { getUser } from '../API/userAPI'

export const useUser = () => {
  const [user, setUser] = useState()

  const userQuery = useQuery(['user'], () => getUser(), {
    onError: (error) => {
      sessionStorage.removeItem('token')
    },
    onSuccess: (data) => {
      setUser(data)
    },
    enabled: !!sessionStorage.getItem('token'),
    staleTime: Infinity
  })
  return { getUser: userQuery.refetch, setUser, user, loading: userQuery.isLoading }
}
