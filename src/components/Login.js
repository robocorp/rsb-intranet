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
            <small id="passwordHelpBlock" class="form-text text-muted">
              Psst... you can login using "maria" as username and
              "thoushallnotpass" as password. But don't tell anyone!
            </small>
            <button type="submit" className="btn btn-primary">
              Log in
            </button>
          </form>
        </div>
        <div className="col-sm">
          <div className="alert  alert-info" role="alert">
            <h4>Hey! Wait a minute... What is this site?</h4>
            <hr></hr>
            <p>
              This is a demonstration site built by {}
              <a href="https://www.robocorp.com">Robocorp</a>, and we use it for
              demos and our learning courses... Think about it as a gym for
              Software Robots!
            </p>

            <p>
              You are absolutely free to play around with it. Mind you,
              sometimes it's intentionally a bit buggy!
              <span role="img" aria-label="sweating smily face emoticon">
                😅
              </span>
            </p>

            <p>
              If this sounds interesting,{' '}
              <a href="https://hub.robocorp.com">Visit us</a> to learn how to
              make your own Software Robots!
            </p>
          </div>
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
