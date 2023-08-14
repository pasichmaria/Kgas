import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const InternalServerErrorPage = () => {
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
          borderColor: 'red',
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
             500
            </Typography>
              <Typography variant="h6">
                Сталася помилка
              <Typography variant="h6">
                Спробуйте пізніше або зверніться до адміністратора
              </Typography>
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate('/login')}
              fullWidth
            >
              Повернутися на головну
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}