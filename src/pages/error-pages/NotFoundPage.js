import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Grid, Button, Container, Box,Typography } from '@mui/material'
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
            </Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate(-1)}
                fullWidth
              >
                Назад
              </Button>
            </Grid>
          </Grid>
      </Box>
    </Container>
  )
}