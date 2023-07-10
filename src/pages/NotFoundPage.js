import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../components'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { Grid } from '@mui/material'
import Typography from '@mui/material/Typography'

export const NotFoundPage = () => {
  const navigate = useNavigate()
  return (
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: 0,
      }}
    >
      <Box
        sx={{
          border: 2,
          borderColor: 'secondary.main',
          borderRadius: 4,
          p: 4,
          marginTop: 12,
          boxShadow: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Grid container spacing={2}>
          <Grid xs={12}>
            <Typography variant="h1">
              404
            </Typography>
            <Typography variant="h6">
              Сторінку не знайдено
              <Typography variant="h6">
                Перевірте правильність адреси
              </Typography>
            <img src={'src/assets/404 Error with a cute animal-rafiki.svg'}/>
            </Typography>

            <Grid container xs={12}  justifyContent='space-between' >
                <Button  fullWidth variant="contained" onClick={() => navigate('/home')}>
                  На головну
                </Button>
            </Grid>

            </Grid>
          </Grid>
      </Box>
    </Container>
  )
}