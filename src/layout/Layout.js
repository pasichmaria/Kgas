import React from 'react'
import { Navigation } from './Navigation'

export const Layout = ({ children, user, setUser }) => {
  return <>
    <Navigation setUser={setUser} user={user} children={children} />
  </>
}
