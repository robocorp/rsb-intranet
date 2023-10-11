import React from 'react'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
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
  return user ? <Intranet /> : <Login />
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <div className="container main-container">
          <Routes>
            <Route path="/robot-order" element={<RobotOrder />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  )
}

export default App
