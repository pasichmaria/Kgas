import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { useAuth } from '../../hooks'
import { Avatar, Alert, Box, Container, Grid, Paper, TextField, Typography, Button, Snackbar } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const LoginPage = ({ getUser, user }) => {
  const navigate = useNavigate()
  if (user) {
    setTimeout(() => {
      navigate('/acts', { replace: true })
    }, 1000)
  }
  const [openSnackbarOk, setOpenSnackbarOk] = useState(false)
  const handleSnackbarCloseOk = () => {
    setOpenSnackbarOk(false)
  }
  const handleSnackbarCloseError = () => {
    setOpenSnackbarError(false)
  }
  const [openSnackbarError, setOpenSnackbarError] = useState(false)

  const { login } = useAuth({
    onLoginSuccess: (data) => {
      sessionStorage.setItem('token', data)
      setOpenSnackbarOk(true)
      getUser(data)
    }, onError: (error) => {
      setOpenSnackbarError(true)
    }
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const formik = useFormik({
    initialValues: {
      email: '', password: ''
    }, onSubmit: async (values) => {
      setIsSubmitting(true)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      const data = {
        email: values.email, password: values.password
      }
      await login(data)
      setIsSubmitting(false)
    }, validationSchema: Yup.object({
      email: Yup.string().email('Невірний формат пошти').required('Required'),
      password: Yup.string().required('Пароль не введено.')
    })
  })

  return (
    <Container component='main'>
      {user && navigate('/acts', { replace: true })}
      <Grid container alignItems='center' justifyContent='center' sx={{ mt : "10%" , mb : '5%'}} >
        <Grid item xs={12} sm={5}>
          <Paper elevation={6} sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3 }}>
            <Snackbar open={openSnackbarOk} autoHideDuration={6000} onClose={handleSnackbarCloseOk}>
              <Alert onClose={handleSnackbarCloseOk} severity='success'>
                Вітаємо! Ви успішно увійшли до системи.
              </Alert>
            </Snackbar>
            <Snackbar open={openSnackbarError} autoHideDuration={6000} onClose={handleSnackbarCloseError}>
              <Alert onClose={handleSnackbarCloseError} severity='error'>
                Невірний логін або пароль.
              </Alert>
            </Snackbar>
            <Box
              sx={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%'
              }}
            >
              <Typography component='h1' variant='h5' style={{
                fontSize: 29, fontFamily: 'typeface-inter'
              }}>
                Вхід в систему порушення
              </Typography>
              <Box sx={{ height: '100%' }} component='form' onSubmit={formik.handleSubmit}>
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='email'
                  label='Введіть вашу пошту'
                  name='email'
                  autoFocus
                  autoComplete='email@kvgas.com.ua'
                  error={formik.errors.email}
                  helperText={formik.errors.email}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  name='password'
                  label='Введіть пароль'
                  type='password'
                  id='password'
                  autoComplete='Пароль  '
                  error={formik.errors.password}
                  helperText={formik.errors.password}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                <Button
                  type='submit'
                  fullWidth
                  size='large'
                  variant='contained'
                  sx={{ mt: 3, mb: 2 }}
                  disabled={isSubmitting}
                >
                  Увійти
                </Button>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Paper   elevation={3} sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 4,
            borderRadius: '0 16px 16px 0',
            background: 'linear-gradient(180deg, #3B65C3 0%, #234696 100%)'}}
          >
            <Typography variant='h5' style={{ color: '#fff', fontSize: 29}}>
              Проект "Порушення"
            </Typography>
            <Typography variant='body1' style={{
              color: '#fff', margin: '16px', alignItems: 'center' }}>
              Проект "Порушення" - це система, яка дозволяє відстежувати порушення в
              газовому обладнанні та надавати їх на розгляд відповідним службам.
              Якщо у вас виникли питання
              звертайтесь до технічної підтримки.

            </Typography>
            <Button
              fullWidth
              size='large'
              variant='outlined'
              sx={{
                mt: 2, mb: 2, borderRadius: '4px', backgroundColor: '#fff',
              }}
            >
              Технічна підтримка
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
