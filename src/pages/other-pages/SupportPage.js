import React, { useState } from 'react'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import {
  Alert, Autocomplete, Box, Button, Container, Snackbar, TextField, Typography
} from '@mui/material'

import { useFeedback, useGetActs } from '../../hooks'
import { ErrorLoad, Loading } from '../../components'
import Paper from '@mui/material/Paper'

export const SupportPage = ({ user }) => {
  const [actNumber, setActNumber] = useState(null)

  const { feedback, isError, isSuccess } = useFeedback({
    onFeedbackSuccess: (data) => {
      alertOk()
    }, onError: () => {
      alertError()
    }
  })

  const alertError = () => {
    return (<Alert severity='error'>
      Помилка при відправці повідомлення
    </Alert>)
  }
  const alertOk = () => {
    return (<Alert severity='success'>
      Повідомлення відправлено
    </Alert>)
  }

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
      await feedback(data)
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
    height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
  }}
  >

    {isError && alertError()}
    {isSuccess && alertOk()}
    <Box
      sx={{
        display: 'flex', flexDirection: 'column', alignItems: 'center'
      }}
    >
      <Paper elevation={6} sx={{
        width: '100%', maxWidth: '750px',    borderRadius: '16px', padding: '16px 32px'
      }}
      >
        <Typography component='h1' variant='h5'>
          Зворотній зв'язок
        </Typography>
        <Box>
          <form onSubmit={formik.handleSubmit}>
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
          </form>
        </Box>
      </Paper>
    </Box>
  </Container>)

}
