import React from 'react'
import {AuthProvider, useAuthState} from '../contexts/auth'
import Footer from './Footer'
import Header from './Header'
import Intranet from './Intranet'
import Login from './Login'
import RobotOrder from './robot-order/RobotOrder'
import './App.css'

const rsbDestabilizeKey = 'rsbDestabilize'

const setDestabilize = () => {
  const destabilizeParam = new URLSearchParams(window.location.search).get(
    'destabilize',
  )

  if (destabilizeParam === 'true') {
    window.localStorage.setItem(rsbDestabilizeKey, true)
  } else if (destabilizeParam === 'false') {
    window.localStorage.removeItem(rsbDestabilizeKey)
  }
}

function Home() {
  const {user} = useAuthState()
  setDestabilize()
  return isRobotOrder() ? <RobotOrder /> : user ? <Intranet /> : <Login />
}

function isRobotOrder() {
  return window.location.pathname.startsWith('/robot-order')
}

function App() {
  return (
    <AuthProvider>
      <Header />
      <div className="container main-container">
        <Home />
      </div>
      <Footer />
    </AuthProvider>
  )
}

export default App
