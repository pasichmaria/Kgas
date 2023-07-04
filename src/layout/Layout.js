import React from 'react'
import { Navigation } from './Navigation'
import { Footer } from './Footer'

export const Layout = ({ children, user, setUser }) => {
  return <>
    <Navigation setUser={setUser} user={user} children={children} />
  </>
}
