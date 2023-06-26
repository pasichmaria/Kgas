import { useQuery } from '@tanstack/react-query'
import { getAllInfo } from '../API'

export const useAllInfo = () => {
  const getAllInfoQuery = () => {
    useQuery(['allInfo'],
      () => getAllInfo(),
      { staleTime: 1000 * 60 * 15 }
    )
  }
  return {  isLoading: getAllInfoQuery.isLoading, data: getAllInfoQuery.data , error : getAllInfoQuery.error }
}