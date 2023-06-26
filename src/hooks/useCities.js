import { useQuery } from '@tanstack/react-query'
import { getCity } from '../API'
import { useEffect } from 'react'

export const useCities = ({ department_id , search_city}) => {
  const { data: cities, refetch, isLoading: isCitiesLoading, error: errorCities } = useQuery(
    ['cities', department_id , search_city],
    () => getCity({ department_id, search_city }),
    {
      enabled: !!department_id
    }
  )
  useEffect(() => {
    if (department_id) {
      refetch().then()
    }
  }, [department_id , search_city])
  return { cities, isCitiesLoading, errorCities }
}