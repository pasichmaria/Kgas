import React from 'react'

import { Sidebar } from './Sidebar'
import { BackButton, LogoutButton } from '../components'

export const Layout = ({ children, user, setUser }) => {
  return <>
    <Sidebar user={user} children={children} />
    <BackButton user={user} />

    { user && (<LogoutButton setUser={setUser} />: null )}
  </>
}
