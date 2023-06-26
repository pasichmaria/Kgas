import { useQuery } from '@tanstack/react-query'
import { getAllInfo } from '../API'
export const useAllInfo = () => {
  const  query  = useQuery(
    ['allInfo'],
    () => getAllInfo(),
    { staleTime: 15000 }
  )
  return (query)
}