import { Sidebar } from './Sidebar'
import { BackButton, LogoutButton } from '../components'
import React from 'react'

export const Layout = ({ children, user, setUser,getUser }) => {
  return <>
    <Sidebar user={user} children={children} />
    <BackButton user={user} />
    <LogoutButton setUser={setUser} />
  </>
}
