import { useMutation } from 'react-query'
import { login } from '../API/auth'


export const useAuth = ({ onLoginSuccess }) => {
  const loginQuery = useMutation({
    mutationFn: (data) => login(data),
    onSuccess: (data) => {
      onLoginSuccess(data)
    },
    onError: (error) => {
      console.log(error)
    }
  })

  return {
    login: loginQuery.mutate
  }
}
