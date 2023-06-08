import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { getActByNumber, getAllActs} from '../API/actAPI'

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
export const useGetAct = ({ actNumber }) => {
  const getActByNumberQuery = useQuery(['act', actNumber], () =>
    getActByNumber({ actNumber }
    ), { enabled: !!actNumber }
  )
  return getActByNumberQuery
}
export const useGetActs = () => {
  const getAllActsQuery = useQuery(['acts'], () =>
    getAllActs())

  return getAllActsQuery}
