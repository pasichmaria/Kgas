import React from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Button, Input, Label } from '../components'
import { useAuth } from '../hooks'
export const LoginPage = ({ getUser }) => {
  const { login } = useAuth({
    onLoginSuccess: (data) => {
      localStorage.setItem('token', data)
      getUser(data)
    }
  })
  const formik = useFormik(
    {
      initialValues: {
        email: '',
        password: ''
      },
      onSubmit: values => {
        const data = {
          email: values.email,
          password: values.password
        }
        login(data)
      },
      validationSchema: Yup.object({
        email: Yup.string().email('Невірний формат пошти').required('Required')
      })
    }
  )

  return (
    <div className='flex items-center justify-center h-screen bg-gray-700 sm:px-6'>
      <div className='w-full max-w-sm p-4 bg-gray-900 rounded-md shadow-md sm:p-6'>
        <div className='flex items-center justify-center'>
          <Label className='text-white text-xl'>Вхід до журналу</Label>
        </div>
        <form className='mt-4' onSubmit={formik.handleSubmit}>
          <Input
            type='email'
            id='email'
            name='email'
            placeholder='Введіть вашу пошту'
            error={formik.errors.email}
            errorText={formik.errors.email}
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <Input
            type='password'
            id='password'
            name='password'
            placeholder='Введіть пароль'
            error={formik.errors.password}
            errorText={formik.errors.password}
            value={formik.values.password}
            onChange={formik.handleChange}
            className='mt-6'
          />
          <div className='mt-6'>
            <Button
              className={'w-full py-2 mt-4'}
              type={'submit'}
              variant='primary'
              onClick={formik.handleSubmit}
              isDisabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? 'Вхід...' : 'Вхід до аккаунту'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
LoginPage.propTypes = {
  getUser: PropTypes.func.isRequired
}