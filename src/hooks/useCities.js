import { useQuery } from '@tanstack/react-query'
import { getCity } from '../API'
import { useEffect } from 'react'
import { useState } from 'react'

export const useCities = ({ department_id }) => {
const [search_city, setSearch_city] = useState();
  const { data: cities, refetch, isLoading: isCitiesLoading, error: errorCities } = useQuery(
    ['cities', department_id , search_city],
    () => getCity({ department_id, search_city }),
    {
      enabled: !!department_id
    }
  )
  useEffect(() => {
    if (department_id || search_city) {
      refetch().then()
    }
  }, [department_id , search_city])

  return { cities, isCitiesLoading, errorCities, setSearch_city }
}