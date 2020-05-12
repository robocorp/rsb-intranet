import React from 'react'
import {useAuthState} from '../contexts/auth'

function Logout() {
  const {logout, user} = useAuthState()

  return user ? (
    <button
      onClick={logout}
      id="logout"
      type="button"
      className="btn btn-secondary"
    >
      Log out
    </button>
  ) : null
}

export default Logout
