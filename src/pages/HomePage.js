import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../components'

export const HomePage = () => {
  const navigate = useNavigate()
  return (
    <main className='flex-1 bg-indigo-100'>
      <div className='overflow-x-auto'>
        <div className='p-6 w-full inline-block align-middle'>
          <section
            className='w-full h-screen flex flex-col lg:flex-row items-center justify-center space-y-16 lg:space-y-0 space-x-8 2xl:space-x-0'>
            <div className='w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center'>
              <p className='text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider uppercase text-gray-500'>
                Вітаємо на головній сторінці
              </p>
              <p className='text-lg md:text-xl lg:text-2xl text-gray-500 my-12'>
                Ви можете переглянути журнал актів порушень, та внутрішні документи
              </p>
              <div className='grid grid-cols-2 gap-6'>
                <Button
                  className={'w-full py-2'}
                  variant={'primary'}
                  size={'lg'}
                  onClick={() => {
                    navigate('/internalDocuments')
                  }}
                >Внутрішні документи
                </Button>
                <Button
                  className={'w-full py-2'}
                  variant={'primary'}
                  size={'lg'}
                  onClick={() => {
                    navigate('/acts')
                  }}
                >
                  Журнал актів порушень
                </Button>
              </div>
            </div>
            <div className='w-full lg:w-1/2 flex items-center justify-center'>
              <img src='https://cataas.com/cat' alt='Error image' />
            </div>
          </section>
        </div>
      </div>
    </main>)
}
