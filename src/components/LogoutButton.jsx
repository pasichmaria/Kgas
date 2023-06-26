import { HiLogout } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import React from 'react'
export const LogoutButton = ({ setUser }) => {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token'),
      setUser(),
      navigate('/login')
  }

  return (
    <div className='fixed top-12 right-6'>
      <button
        onClick={() => handleLogout()}
        className='text-white bg-gradient-to-r from-red-400
                to-red-600 hover:bg-gradient-to-bl focus:ring-1
                focus:outline-none focus:ring-rose-400 dark:
                focus:ring-rose-900 font-medium rounded-md
                text-xl px-5 py-2.5 text-center mr-2 mb-2'
      >
        <HiLogout />
      </button>
    </div>)
}