import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {AuthProvider, useAuthState} from '../contexts/auth'
import Footer from './Footer'
import Header from './Header'
import Intranet from './Intranet'
import FeedbackForm from './FeedbackForm'
import Login from './Login'
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
          <Switch>
            <Route path="/feedback">
              <FeedbackForm />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  )
}

export default App
