import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export const Loading = () =>  {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}>
      <CircularProgress />
      <Typography variant="h6" component="div" sx={{ ml: 2 }}>
       Встановлення з'єднання...
      </Typography>
    </Container>
  );
}