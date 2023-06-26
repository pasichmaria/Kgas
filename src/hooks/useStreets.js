import { useQuery } from '@tanstack/react-query'
import { getStreet } from '../API'
import { useEffect } from 'react'

export const useStreets = ({ search_street, city_id }) => {
  const { data: streets, refetch, isLoading: isStreetsLoading, error: errorStreets } = useQuery(
    ['streets', city_id, search_street],
    () => getStreet({ search_street, city_id }),
    {
      enabled: !!city_id && !!search_street
    }
  )
  useEffect(() => {
    if (city_id && search_street) {
      refetch().then()
    }
  }, [city_id, search_street])

  return { streets, isStreetsLoading, errorStreets }
}