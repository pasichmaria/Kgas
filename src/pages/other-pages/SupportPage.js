import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import {  Box, Button, Container, TextField, Typography } from '@mui/material'
import { axios } from '../../API'

export const SupportPage = ({ user }) => {

  const sendFeedback = (data) => {
    axios.post('https://jsonplaceholder.typicode.com/posts', data)
      .then((responce) => {
        <Link to={'/home'} />
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formik = useFormik({
      initialValues: {
        message: '',
        feedback: ' ',
        selectedDoc: null
      },

    onSubmit: async (values) => {
        setIsSubmitting(true)
        await new Promise((resolve) => setTimeout(resolve, 1000))

        const data = {
          message: values.message,
          feedback: values.feedback,
          selectedDoc: values.selectedDoc
        }
        await sendFeedback(data)
        setIsSubmitting(false)
      },
      validationSchema: Yup.object({
        message: Yup.string().required('Введіть ваше повідомлення')
      })
    }
  )

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
          marginTop: 12,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography component='h1' variant='h5'>
          Зворотній зв'язок
        </Typography>
        <Box component='form' onSubmit={formik.handleSubmit}>
          <TextField
            margin='normal'
            required
            fullWidth
            name='message'
            id='message'
            label='Введіть  повідомлення'
            type='text'
            autoComplete='Ваше повідомлення'
            helperText={formik.errors.message}
            value={formik.values.message}
            onChange={formik.handleChange}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='feedback'
            label='Пропозиції та зауваження'
            type='text'
            id='feedback'
            autoComplete='Пропозиції та зауваження'
            value={formik.values.feedback}
            onChange={formik.handleChange}
          />

          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
            disabled={isSubmitting}
          >
            Відправити
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
