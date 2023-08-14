import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Grid, Button, Container, Box, Typography } from '@mui/material'

export const NotFoundPage = () => {
  const navigate = useNavigate()
  return (<Container
      sx={{
        height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
      }}
    >
      <Box
        sx={{
          border: 2,
          marginBottom: 12,
          marginTop: 12,
          borderColor: `error.main`,
          borderRadius: 6,
          p: 8,
          boxShadow: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Grid container spacing={2}>
          <Grid xs>
            <Typography variant='h1'>
              404
            </Typography>
            <Typography variant='h6'>
              Сталася помилка , зверніться до адміністратора
            </Typography>
            <Button
              sx={{ mt: 2 }}
              variant='contained'
              color='error'
              onClick={() => navigate('/login')}
              fullWidth
            >Повернутись назад</Button>
          </Grid>
        </Grid>
      </Box>
    </Container>)
}