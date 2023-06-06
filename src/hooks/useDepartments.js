import { useQuery } from '@tanstack/react-query'
import { getDepartments } from '../API'
import { useEffect } from 'react'

export const useDepartments = (region) => {
  const { data: departments, refetch, isLoading: isDepartmentsLoading, error : errorDepartment } = useQuery(
    ['departmens', region],
    () => getDepartments(region),
    {
      enabled: !!region
    }
  )
  useEffect( () => {
    if (region) {
     refetch().then()
    }
  }, [region])
  return { departments, isDepartmentsLoading , errorDepartment}
}