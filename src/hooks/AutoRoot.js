import LoginPage from 'pages/LoginPage';
import MainPage from 'pages/MainPage';
import React from 'react'
import { useLocation } from 'react-router-dom'

const AutoRoot = () => {
    const location = useLocation();
  return (
    (location.pathname === '/' ? <MainPage/> : location.pathname === '/login' ? <LoginPage/> : location.pathname !== '/login' ? <LoginPage/> : null)
  )
}

export default AutoRoot