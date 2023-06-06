import { useQuery } from '@tanstack/react-query'
import { getStreet } from '../API'
import { useEffect } from 'react'

export const useStreets = (city) => {
  const { data: streets, refetch, isLoading: isStreetsLoading, error : errorStreets } = useQuery(
    ['streets', city],
    () => getStreet(city),
    {
      enabled: !!city
    }
  )
  useEffect( () => {
    if (city) {
      refetch().then()
    }
  }, [city])
  return { streets, isStreetsLoading , errorStreets}
}