import { Container, Typography } from '@mui/material'
import React from 'react'

export const LaboratoryEditActPage = ({act }) => {
    return (
        <Container sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: 0,
          backgroundColor: '#ffffff',
          mb: 15
        }}>
          <Typography variant="h6" sx={{ mt: 5, mb: 5 }}>
           Лабораторія повірги ПЛГ
          </Typography>
        </Container>
    )
}