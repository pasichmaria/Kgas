import { useQuery } from '@tanstack/react-query'
import { getDepartments } from '../API'
import { useEffect } from 'react'

export const useDepartments = ({ regionId }) => {
  const { data: departments, refetch, isLoading: isDepartmentsLoading, error: errorDepartments } = useQuery(
    ['departments', regionId],
    () => getDepartments({ regionId }),
    {
      enabled: !!regionId ,
      staleTime: 15000
    })
  useEffect(() => {
    if (regionId) {
      refetch().then()
    }
  },  [regionId, refetch ])

  return { departments, isDepartmentsLoading, errorDepartments }
}