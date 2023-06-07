import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

import { Button, Loading, SearchActsDropdown, TextArea } from '../components'
import { acts } from '../data'
import { axios } from '../API'

export const SupportPage = ({ user }) => {
  const sendFeedback = (data) => {
    axios.post('https://jsonplaceholder.typicode.com/posts', data)
      .then((responce) => {
        navigate('/home')
        console.log(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()
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
    <main className='flex-1 bg-indigo-50'>
      <div className='flex flex-col'>
        <div
          className='mx-auto grid max-w-2xl items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8'>
          <h2 className='text-3xl font-light tracking-tight text-center text-gray-900 sm:text-4xl'>
            Технічна підтримка
          </h2>
          <p className='mt-6 text-center text-gray-500'>
            Ви можете звернутись з будь-яким питанням, заповнивши форму на даннній сторінці
          </p>
          <form className='space-y-8 ng-untouched ng-pristine ng-valid' onSubmit={formik.handleSubmit}>
            <TextArea
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.errors.message}
              errorText={formik.errors.message}
              id='message'
              name='message'
              placeholder='Введіть ваше повідомлення'
            />
            <TextArea
              value={formik.values.feedback}
              onChange={formik.handleChange}
              id='feedback'
              name='feedback'
              placeholder='Пропозиції по покращенню'
            />
            {user && (
              <SearchActsDropdown
                formik={formik}
                acts={acts} />: null)}
            <Button
              className={'w-full py-2 mt-4'}
              type={'submit'}
              variant='success'
            >
              {formik.isSubmitting || isSubmitting ?
                <Loading size={'sm'} variant={'success'} /> : 'Надіслати повідомлення'}
            </Button>
          </form>
        </div>
      </div>
    </main>
  )
}

SupportPage.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string
  })
}