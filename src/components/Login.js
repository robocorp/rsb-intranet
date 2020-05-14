import React from 'react'
import Info from './Info'
import {useAuthState} from '../contexts/auth'

function Login() {
  const {login} = useAuthState()

  const handleSubmit = (event, login) => {
    event.preventDefault()
    const {username, password} = event.target.elements
    login(username.value, password.value)
  }

  return (
    <div className="container">
      <LoginFailed />
      <div className="row">
        <div className="col-sm">
          <form onSubmit={event => handleSubmit(event, login)}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                required
                className="form-control"
              />
            </div>
            <p>
              <small id="passwordHelpBlock" className="form-text text-muted">
                Psst... you can login using "maria" as username and
                "thoushallnotpass" as password. But don't tell anyone!
              </small>
            </p>
            <button type="submit" className="btn btn-primary">
              Log in
            </button>
          </form>
        </div>
        <div className="col-sm">
          <Info />
        </div>
      </div>
    </div>
  )
}

function LoginFailed() {
  const {status} = useAuthState()

  if (status === 'login-failed') {
    return (
      <div className="alert alert-warning" role="alert">
        Invalid username or password.
      </div>
    )
  }

  return null
}

export default Login
