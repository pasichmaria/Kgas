import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../components'
export const ForbiddenPage = () => {
  const navigate = useNavigate()
  return (
    <section
      className='w-full h-screen flex flex-col lg:flex-row items-center justify-center space-y-16 lg:space-y-0 space-x-8 2xl:space-x-0'>
      <div className='w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center'>
        <p className='text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider uppercase text-gray-500'>
          403
        </p>
        <p className='text-lg md:text-xl lg:text-2xl text-gray-500 my-12'>
          На разі у вас недостатньо прав для доступу до данної сторінки{' '}
        </p>
        <p className='mb-6 text-lg  text-gray-700'>
          Виникли питання ? Зверніться до нашої технічної підтримки або поверніться на головну
          сторінку
          <div className='grid grid-cols-2 gap-4 mt-8'>
            <Button
              className={'w-full py-2'}
              variant={'primary'}
              onClick={() => {
                navigate('/support')
              }}
            >
              Технічна підтримка
            </Button>
            <Button
              className={'w-full py-2'}
              variant={'primary'}
              onClick={() => {
                navigate('/login')
              }}
            >
              На головну
            </Button>
          </div>
        </p>
      </div>
      <div className='w-full lg:w-1/2 flex items-center justify-center'>
        <img src='https://cataas.com/cat'/>
      </div>
    </section>
  )
}