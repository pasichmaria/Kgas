import React from 'react'
import { useNavigate } from 'react-router-dom'

import { CustomPaginationActionsTable, SearchActsDropdown } from '../components'
import { useGetActs } from '../hooks'
import { Button, Container, Grid } from '@mui/material'


export const ActsPage = ({ user }) => {
  const navigate = useNavigate()
  const { perPage, setPerPage, searchValue, setSearchValue, currentPage, setCurrentPage, query } = useGetActs()

  if (query.isLoading) {
    return <div>Loading...</div>
  }
  if (query.error) {
    return <div>Error loading data</div>
  }
  return (
    <Container sx={{
      mt : 15,
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      p: 0,
      backgroundColor: '#ffffff',
      mb: 15
    }}>
      <Grid container={12}>
          <Button variant='contained' onClick={() => navigate('/newAct')}
                  sx={{ backgroundColor: '#1e88e5', color: '#ffffff', width: '100%', height: '100%' }}>Створити акт</Button>
      </Grid>
      <CustomPaginationActionsTable  searchValue={searchValue} setSearchValue={setSearchValue} total={query.data?.total} perPage={perPage} currentPage={currentPage} setPerPage={setPerPage} query={query} />
    </Container>
  )
}