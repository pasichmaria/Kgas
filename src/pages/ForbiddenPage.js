import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Grid} from '@mui/material';
import {useNavigate} from 'react-router-dom';

export const ForbiddenPage = () => {
  const navigate = useNavigate();


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
              403
            </Typography>
            <Typography variant="h6">
              На данний момент ви не маєте доступу до цієї сторінки,
              через те що ви не авторизовані.
              <Typography variant="h6">
                Або не маєте прав доступу до цієї сторінки </Typography>
            </Typography>

            <Grid container xs={12}  justifyContent='space-between' >
              <Grid xs={5}>
                <Button  fullWidth variant="contained" onClick={() => navigate('/login')}>Будь
                  ласка авторизуйтесь</Button>
              </Grid>
              <Grid xs={5}>
                <Button  fullWidth variant="contained" onClick={() => navigate('/support')}>
                  Звернутися в службу підтримки
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}