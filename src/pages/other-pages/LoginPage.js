import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { useAuth } from '../../hooks'
import { Avatar, Box, Container, TextField, Typography, Button } from '@mui/material'

export const LoginPage = ({ getUser , user }) => {
    const { login } = useAuth({
      onLoginSuccess: (data) => {
        localStorage.setItem('token', data)
        getUser(data)
      }
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const formik = useFormik({
      initialValues: {
        email: '', password: ''
      },
      onSubmit: async (values) => {
        setIsSubmitting(true)
        await new Promise((resolve) => setTimeout(resolve, 1000))
        const data = {
          email: values.email, password: values.password
        }
        await login(data)
        setIsSubmitting(false)
      },
      validationSchema: Yup.object({
        email: Yup.string().email('Невірний формат пошти').required('Required'),
        password: Yup.string().required('Пароль не введено.')
      })
    })

    return (

      <Container sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: 0
      }}>

        <Box
          sx={{
            border: 1,
            borderColor: 'secondary.main',
            borderRadius: 4,
            p: 4,
            marginTop: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
          <Typography component='h1' variant='h5'>
            Вхід до аккаунту
          </Typography>
          <Box component='form' onSubmit={formik.handleSubmit}>

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
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              disabled={isSubmitting}
            >
              Увійти
            </Button>
          </Box>
        </Box>
      </Container>
    )
}
LoginPage.propTypes = {
  getUser: PropTypes.func.isRequired
}