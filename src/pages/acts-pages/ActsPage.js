import React from 'react'

import { CustomPaginationActionsTable, ErrorLoad, Loading } from '../../components'
import { useGetActs } from '../../hooks'
import { Dashboard } from '../../components/acts'
import { ActsTable } from '../../components/acts/ActsTable'

export const ActsPage = () => {
  const { perPage, setPerPage, searchValue, setSearchValue, currentPage, query } = useGetActs()
  if (query.isLoading) {
    return <Loading />
  }
  if (query.error) {
    return <ErrorLoad error={query.error} />
  }
  return (
    <ActsTable searchValue={searchValue} setSearchValue={setSearchValue} total={query.data?.total} perPage={perPage} currentPage={currentPage} setPerPage={setPerPage} query={query} />
  )
}