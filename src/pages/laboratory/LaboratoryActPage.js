import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Breadcrumbs, Button, Link, Box } from '@mui/material'
import Grid from '@mui/material/Grid'
import { useGetPLGAct } from '../../hooks'
import { ErrorLoad, Loading } from '../../components'

export const LaboratoryActPage = ({ act }) => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState(0)
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex)
  }
  const { query, isError,isSuccess,isLoading } = useGetPLGAct(act.id)

  return (
    <>
    <Breadcrumbs aria-label='breadcrumb' maxItems={2}>
      <Link
        sx={{ display: 'flex', alignItems: 'center', color: activeTab === 0 ? 'blue' : 'inherit' }}
        underline='hover'
        onClick={() => handleTabClick(0)} to='/acts'
      >
        Акти порушень
      </Link>

      <Link
        sx={{ display: 'flex', alignItems: 'center', color: activeTab === 2 ? 'blue' : 'inherit' }}
        underline='hover'
        onClick={() => handleTabClick(2)} to={`/act/laboratory`}
      >
        Редагувати акт
      </Link>)}

      <Button onClick={() => navigate(`/act/laboratory/edit`)} variant='contained' sx={{ float: 'right' }}
      >
        Внести дані по акту
      </Button>
    </Breadcrumbs>
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      mb: 15
    }}>
      {isError && <ErrorLoad error={isError} />}
      {isLoading && <Loading />}
      <Grid id='violation-act' container spacing={2}>
      </Grid>
    </Box>
  </>)
}