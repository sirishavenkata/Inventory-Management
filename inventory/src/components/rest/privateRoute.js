import React from 'react'
import { Navigate } from 'react-router-dom'
import {useAuth} from '../context/Authcontext'


function PrivateRoute({ children }) {
    const { userIsAuthenticated } = useAuth()
    return userIsAuthenticated() ? children : <Navigate to="/login" />
  }