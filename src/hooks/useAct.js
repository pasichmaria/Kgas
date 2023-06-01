import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const useAddAct = ({ onAddActSuccess }) => {
  const navigate = useNavigate()
  const addActQuery = useMutation({
    mutationFn: (data) => axios.post('https://jsonplaceholder.typicode.com/posts', data), onSuccess: (data) => {
      onAddActSuccess(data)
      navigate('/acts')
    },
    staleTime: Infinity,
    onError: (error) => {
      console.log(error)
    }
  })
  return {
    addAct: addActQuery.mutate
  }
}
