import React from 'react'
import { useNavigate } from 'react-router-dom'

import { CustomPaginationActionsTable } from '../components'
import { useGetActs } from '../hooks'
import { Button, Container, Grid } from '@mui/material'

export const ActsPage = () => {
  const navigate = useNavigate()
  const { perPage, setPerPage, searchValue, setSearchValue, currentPage, query } = useGetActs()

  if (query.isLoading) {
    return <div>Loading...</div>
  }
  if (query.error) {
    return <div>Error loading data</div>
  }
  return (
    <Container sx={{
      mt : 10,
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      p: 0,
      backgroundColor: '#ffffff',
      mb: 15
    }}>
      <CustomPaginationActionsTable  searchValue={searchValue} setSearchValue={setSearchValue} total={query.data?.total} perPage={perPage} currentPage={currentPage} setPerPage={setPerPage} query={query} />
    </Container>
  )
}