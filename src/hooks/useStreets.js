import { useQuery } from '@tanstack/react-query'
import { getStreet } from '../API'
import { useEffect } from 'react'

export const useStreets = ({requestedStreet , cityId}) => {
  const { data: streets, refetch, isLoading: isStreetsLoading, error: errorStreets } = useQuery(
    ['streets', cityId],
    () => getStreet(cityId , requestedStreet),
    {
      enabled: !!cityId && !!requestedStreet,
    }
  )
  useEffect(() => {
    if (cityId && requestedStreet) {
      refetch().then()
    }
  }, [cityId, requestedStreet])
  return { streets, isStreetsLoading, errorStreets }
}