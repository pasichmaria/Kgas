import React from 'react'
import { Dashboard } from '../components/acts'
import { Footer } from './Footer'

export const Layout = ({ children, user, setUser }) => {
  return (
    <>
      <Dashboard user={user} children={children} setUser={setUser} />
    </>
  )
}
