import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import { login } from '../API'

export const useAuth = ({ onLoginSuccess }) => {
  const navigate = useNavigate()
  const loginQuery = useMutation({
    mutationFn: (data) => login(data),
    onSuccess: (data) => {
      onLoginSuccess(data)
      navigate('/home')
    },
    staleTime: Infinity,
    onError: (error) => {
      console.log(error)
    }
  })
  return {
    login: loginQuery.mutate
  }
}
