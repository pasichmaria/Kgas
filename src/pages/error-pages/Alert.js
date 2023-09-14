import React, { useState } from 'react'
import { Grid, Alert } from '@mui/material'

export const statusAlert = ({ type, message }) => {
  const [show, setShow] = useState(true);

  if (!show) {
    return null;
  }

  return (
    <Grid sx={{ width: '100%' }}>
      <Alert variant={type} onClose={() => setShow(false)} >
        {message}
      </Alert>
    </Grid>
  );
}