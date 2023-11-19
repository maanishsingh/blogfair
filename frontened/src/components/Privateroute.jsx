import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isLogedIn } from '../auth'
const Privateroute=()=> {
  return isLogedIn()?<Outlet /> : <Navigate to={"/login"} />
}

export default Privateroute