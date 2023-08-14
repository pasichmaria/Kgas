import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Breadcrumbs, Button, Link, Box } from '@mui/material'
import Grid from '@mui/material/Grid'
import { ErrorLoad, Loading } from '../../components'

export const LaboratoryActPage = ({ act , isError, isLoading }) => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState(0)
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex)
  }
  if (isError) {
    return <ErrorLoad />
  }
  if (isLoading) {
    return <Loading />
  }
  return (<>
    <Breadcrumbs aria-label='breadcrumb' maxItems={2}>
      <Link
        sx={{ display: 'flex', alignItems: 'center', color: activeTab === 0 ? 'blue' : 'inherit' }}
        underline='hover'
        onClick={() => handleTabClick(0)} to='/acts'
      >
        Акти порушень
      </Link>
      <Link
        sx={{ display: 'flex', alignItems: 'center', color: activeTab === 1 ? 'blue' : 'inherit' }}
        underline='hover'
        onClick={() => handleTabClick(1)} to={`/act/${act.id}`}
      >
        Лабораторія повірки ПЛГ
      </Link>
      {activeTab !== 1 && activeTab !== 0 && (<Link
        sx={{ display: 'flex', alignItems: 'center', color: activeTab === 2 ? 'blue' : 'inherit' }}
        underline='hover'
        onClick={() => handleTabClick(2)} to={`/act/${act.id}/laboratory`}
      >
        Редагувати акт
      </Link>)}

      <Button onClick={() => navigate(`/act/${act.id}/laboratory/edit`)} variant='contained' sx={{ float: 'right' }}
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
      <Grid id='violation-act' container spacing={2}>
        
      </Grid>
    </Box>
  </>)
}