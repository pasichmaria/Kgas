import React from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { Button, Grid, Typography } from '@mui/material'
export const HomePage = () => {

  const navigate = useNavigate()
  return (

    <Container sx={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      p: 0,
      marginTop : 12

    }}>
      <Box
        sx={{
          border: 2,
          borderColor: 'secondary.main',
          borderRadius: 4,
          p: 4,
          marginTop: 12,
          marginBottom: 12,
          boxShadow: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant='h4' gutterBottom>
              Вітаємо на головній сторінці.
            </Typography>
            <Typography variant='body1' gutterBottom>
              Ви можете переглянути журнал актів порушень, та внутрішні документи.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'
                 height='100%'>
              <Grid item xs={8}>
                <Button variant='contained' color='secondary' size={'large'} fullWidth onClick={() => {
                  navigate('/internalDocuments')
                }}>
                  Переглянути внутрішні документи
                </Button>
              </Grid>
              <Grid item xs={8}>
                <Button variant='contained' color='secondary' size={'large'} fullWidth onClick={() => {
                  navigate('/acts')
                }}>
                  Переглянути журнал актів порушень
                </Button>
              </Grid>
            </Box>
          </Grid>
          <Typography sx={{ mt: 8 }} variant='h6' gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci alias
            asperiores atque autem consequatur cumque cupiditate delectus doloremque doloribus ducimus
            earum eius eligendi eos error esse est eum eveniet excepturi exercitationem expedit</Typography>
          <Grid item xs={12}>
            <Typography variant='body2' gutterBottom>
             Додаткова інформація про систему та її функціонал
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
