import React from 'react'
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
            <button type="submit" className="btn btn-primary">
              Log in
            </button>
          </form>
        </div>
        <div className="col-sm"></div>
      </div>
    </div>
  )
}

export default Login