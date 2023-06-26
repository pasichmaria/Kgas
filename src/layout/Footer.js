import { Link } from 'react-router-dom'
import React from 'react'
import {Box, Container, Grid, Typography} from '@mui/material';
import { FaInstagram, FaGithub, FaTelegram} from 'react-icons/fa';

export function Footer({ user }) {
  return (
    <Box
      sx={{
        heigth : '35vh',
        width: '100%',
        backgroundColor: '#f5f5f5',
        py: 4,
      }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box sx={{display: 'flex', justifyContent: 'space-around', m: 4}}>
              <Link to={'https://t.me/Blueberrypms'}>
                <FaTelegram/>
              </Link>
              <Link to={'https://github.com/pasichmaria'}>
                <FaGithub/>
              </Link>
              <Link to={'https://www.instagram.com/blueberrypms'}>
                <FaInstagram/>
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Typography sx={{ mt : 10 }} variant="body2" color="text.secondary" align="center" >
          {'Copyright © '}
          <Link color="inherit" to="https://mui.com/">
            Created by MUI - design by     </Link>{' '}
          <Link color="inherit" to="https://github.com/pasichmaria">
            Pasichnyk Maria
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </Box>
  )
}
