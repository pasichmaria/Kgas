import { Box, Button, Container, Grid, Toolbar } from '@mui/material'
import { Title } from './Title'
import Stack from '@mui/material/Stack'
import { MdAdd } from 'react-icons/md'
import Paper from '@mui/material/Paper'
import EnhancedTable from './Table'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ActsTable = ({ total, perPage, searchValueProp, setSearchValue, query }) => {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(perPage)
  const navigate = useNavigate()

  return (<Box
    component='main'
    sx={{
      backgroundColor: (theme) => (theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900]),
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto'
    }}
  >
    <Toolbar />
    <Container maxWidth='xl'>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={12}>
          <Title children={'Журнал  актів порушень'} />
          <Stack
            direction='row'
            spacing={2}
            sx={{
              p: 2, display: 'flex', justifyContent: 'space-between'
            }}
          >
            <Button variant='contained' endIcon={<MdAdd />} onClick={() => navigate('/newAct')}>
              Створити новий акт
            </Button>
          </Stack>
          <Paper
            sx={{
              p: 2, mb : 10, display: 'flex', flexDirection: 'column'
            }}
            elevation={4}
          >
            <EnhancedTable
              total={total}
              perPage={perPage}
              page={page}
              setPage={setPage}
              rowsPerPage={rowsPerPage}
              setRowsPerPage={setRowsPerPage}
              searchValue={searchValueProp}
              setSearchValue={setSearchValue}
              query={query}
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  </Box>)
}
