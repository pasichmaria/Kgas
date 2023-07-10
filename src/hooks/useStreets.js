import { useQuery } from '@tanstack/react-query'
import { getStreet } from '../API'
import { useEffect } from 'react'

import { useState } from 'react'
export const useStreets = ({  city_id }) => {
  const [search_street , setSearch_Street] = useState("")
  const { data: streets, refetch, isLoading: isStreetsLoading, error: errorStreets } = useQuery(
    ['streets', city_id, search_street],
    () => getStreet({ search_street, city_id }),
    {
      enabled: !!city_id
    }
  )
  useEffect(() => {
    if (city_id && search_street) {
      refetch().then()
    }
  }, [city_id, search_street])

  return { streets:streets || [], isStreetsLoading, errorStreets, setSearch_Street, search_street }
}