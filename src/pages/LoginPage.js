import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Input, Label, Button} from '../components'
import { useAuth } from '../hooks'
export const LoginPage = ({ getUser }) => {
  const { login } = useAuth({
    onLoginSuccess: (data) => {
      localStorage.setItem('token', data)
      getUser(data)
    }
  })

  const [data, setData] = useState({ email: '', password: '' })
  const handleSubmit = (e) => {
    e.preventDefault()
    login(data)
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }
  return (
    <div className='flex items-center justify-center h-screen bg-gray-700 sm:px-6'>
      <div className='w-full max-w-sm p-4 bg-gray-900 rounded-md shadow-md sm:p-6'>
        <div className='flex items-center justify-center'>
          <Label className='text-white text-xl'>Вхід до журналу</Label>
        </div>
        <form className='mt-4' onSubmit={handleSubmit}>
          <Input
            type='email'
            id='email'
            name='email'
            placeholder='Введіть вашу пошту'
            value={data.email}
            onChange={handleInputChange}
            required
          />
          <Input
            type='password'
            id='password'
            name='password'
            placeholder='Введіть пароль'
            value={data.password}
            onChange={handleInputChange}
            required
            className='mt-6'
          />
          <div className='mt-6'>
            <Button
              className={'w-full py-2'}
              variant={'primary'}
              onClick={handleSubmit}
              type='submit'
            >
              Увійти
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