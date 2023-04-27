import React from 'react'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({ user, children }) => {
  if (user) {
    return children
  }
  return <Navigate to='/login' />
}