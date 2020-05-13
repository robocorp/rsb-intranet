import React from 'react'
import {AuthProvider, useAuthState} from '../contexts/auth'
import Footer from './Footer'
import Header from './Header'
import Intranet from './Intranet'
import Login from './Login'
import './App.css'

function Home() {
  const {user} = useAuthState()
  return user ? <Intranet /> : <Login />
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
