import React from 'react'
import {useAuthState} from '../contexts/auth'

function Logout() {
  const {logout, user} = useAuthState()

  if (!user) {
    return null
  }

  return (
    <div className="logout">
      <span className="username">{user.username}</span>
      <span>
        <button
          onClick={logout}
          id="logout"
          type="button"
          className="btn btn-dark"
        >
          Log out
        </button>
      </span>
    </div>
  )
}

export default Logout
