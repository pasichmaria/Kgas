import React from 'react'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({ token, children }) => {
  if (
    sessionStorage.getItem('token'))
  {
    return children
  }
  return <Navigate to='/login' />
}
