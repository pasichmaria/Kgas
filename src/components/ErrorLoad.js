import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import React from 'react'

export const ErrorLoad = ({ error }) => {
  return (
    <Container
    sx={{
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
      alignItems: 'center'
    }}
    >
      <Grid container spacing={2}>
        <Grid xs={12} sx={{mb :4}}>
          <Typography variant='h6'>
            Помилка при завантаженні даних
          </Typography>
          <Typography variant='body1'>
            Перевірте підключення до інтернету та спробуйте ще раз
          </Typography>

        </Grid>
        <Grid xs={12}>
          <Typography variant='body1'>
            {error}
          </Typography>
        </Grid>
          <Button
            variant='contained'
            color='secondary'
            onClick={() => navigate(-1)}
            fullWidth
          >
            Повернутися назад
          </Button>
        </Grid>
    </Box>
  </Container>
  )
}
