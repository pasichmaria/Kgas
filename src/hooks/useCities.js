import { useQuery } from '@tanstack/react-query'
import { getCity } from '../API'
import { useEffect } from 'react'

export const useCities = (department) => {
  const { data: cities, refetch, isLoading: isCitiesLoading, error : errorCities } = useQuery(
    ['cities', department],
    () => getCity(department),
    {
      enabled: !!department
    }
  )
  useEffect( () => {
    if (department) {
      refetch().then()
    }
  }, [department])
  return { cities, isCitiesLoading , errorCities}
}