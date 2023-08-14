import React, { useState } from 'react'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import {
  Alert, Autocomplete, Box, Button, Container, Snackbar, TextField, Typography
} from '@mui/material'

import { useFeedback, useGetActs } from '../../hooks'
import { ErrorLoad, Loading } from '../../components'

export const SupportPage = ({ user }) => {
  const [openSnackbarOk, setOpenSnackbarOk] = useState(false)
  const handleSnackbarCloseOk = () => {
    setOpenSnackbarOk(false)
  }
  const handleSnackbarCloseError = () => {
    setOpenSnackbarError(false)
  }
  const [openSnackbarError, setOpenSnackbarError] = useState(false)

  const [actNumber, setActNumber] = useState(null)
  const { feedback } = useFeedback({
    onFeedbackSuccess: (data) => {
      console.log(data)
      setOpenSnackbarOk(true)
    }, onError: (error) => {
      setOpenSnackbarError(true)
    }
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const formik = useFormik({
    initialValues: {
      message: '', feedback: ' ', act_number: null
    },

    onSubmit: async (values) => {
      setIsSubmitting(true)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      const data = {
        message: values.message, feedback: values.feedback, act_number: values.act_number
      }
      await feedback({ data })
      setIsSubmitting(false)
    }, validationSchema: Yup.object({
      message: Yup.string().required('Введіть ваше повідомлення')
    })
  })
  const { query } = useGetActs()
  if (query.isLoading) {
    return <Loading />
  }
  if (query.error) {
    return <ErrorLoad error={query.error} />
  }
  return (<Container sx={{
      height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: 0
    }}>
      <Box
        sx={{
          marginTop: 12, display: 'flex', flexDirection: 'column', alignItems: 'center'
        }}
      >
        <Snackbar open={openSnackbarOk} autoHideDuration={6000} onClose={handleSnackbarCloseOk}>
          <Alert onClose={handleSnackbarCloseOk} severity='success' sx={{
            position: 'fixed', top: '10%', left: '40%'
          }}>
            Вітаємо! Ви успішно відправили повідомлення.
          </Alert>
        </Snackbar>
        <Snackbar open={openSnackbarError} autoHideDuration={6000} onClose={handleSnackbarCloseError}>
          <Alert onClose={handleSnackbarCloseError} severity='error' sx={{
            position: 'fixed', top: '10%', left: '45%'
          }}>
            Помилка, спробуйте ще раз.
          </Alert>
        </Snackbar>

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
          {user ? <Autocomplete
            id='act_number'
            fullWidth
            options={query.data.data}
            getOptionLabel={(option) => option.act_number}
            onChange={(event, newValue) => {
              setActNumber(newValue)
              formik.setFieldValue('act_number', newValue.act_number)
            }}
            renderInput={(params) => <TextField {...params} label='Номер акту' />}
          /> : null}
          {actNumber ? <Typography component='h1' variant='h5' sx={{ mt: 4 }}>
            Обраний акт №
            {actNumber && actNumber.act_number}
          </Typography> : null}
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Відправити
          </Button>
        </Box>
      </Box>
    </Container>)
}
