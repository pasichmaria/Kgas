import React from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Button } from '../components'

export const NotFoundPage = () => {
  const navigate = useNavigate()
  return (
    <section
      className='w-full h-screen flex flex-col lg:flex-row items-center justify-center space-y-16 lg:space-y-0 space-x-8 2xl:space-x-0'>
      <div className='w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center'>
        <img src='https://cataas.com/cat' alt='Image' />
      </div>
      <div className='w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center'>
        <p className='text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider uppercase text-gray-500'>
          404
        </p>
        <p className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gray-500 mt-2'>
          Page Not Found
        </p>
        <p className='text-lg md:text-xl lg:text-2xl text-gray-500 my-12'>
          Вибачте але дана сторінка не знайдена
        </p>
        <Button
          variant={'primary'}
          size={'md'}
          onClick={() => {
              navigate('/home')
          }}
        >
          На головну
        </Button>
      </div>
    </section>
  )
}

NotFoundPage.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string
  })
}