import React from 'react'
import { useNavigate } from 'react-router-dom'

import { CustomPaginationActionsTable, ErrorLoad, Loading } from '../../components'
import { useGetActs } from '../../hooks'
import { Container } from '@mui/material'

export const ActsPage = () => {
  const { perPage, setPerPage, searchValue, setSearchValue, currentPage, query } = useGetActs()
  if (query.isLoading) {
    return <Loading />
  }
  if (query.error) {
    return <ErrorLoad error={query.error} />
  }
  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      p: 0,
      backgroundColor: '#ffffff',
      mb: 15
    }}
    >
      <CustomPaginationActionsTable  searchValue={searchValue} setSearchValue={setSearchValue} total={query.data?.total} perPage={perPage} currentPage={currentPage} setPerPage={setPerPage} query={query} />
    </Container>
  )
}