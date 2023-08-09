import React from 'react'
import { Container, Typography } from '@mui/material'
export const ReportingPage = () => {
  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      p: 0,
      backgroundColor: '#ffffff',
      mb: 15,
      mt: 15
    }}>
      <Typography variant="h6" sx={{ mt: 5, mb: 5 }}>
        Сторінка звітності
      </Typography>
    </Container>
  )
}
