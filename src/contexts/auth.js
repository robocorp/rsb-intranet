import React from 'react'
import Error from '../components/Error'
import destabilize from '../utils/destabilize'

const getUser = username =>
  destabilize().then(() => ({username: username.toString()}))

const rsbUserKey = 'rsbUser'

const getUserFromLocalStorage = () => window.localStorage.getItem(rsbUserKey)

const AuthContext = React.createContext()

function AuthProvider({children}) {
  const [state, setState] = React.useState({
    status: null,
    error: null,
    user: getUserFromLocalStorage(),
  })

  const login = async (username, password) => {
    try {
      const user = await getUser(username)
      window.localStorage.setItem(rsbUserKey, JSON.stringify(user))
      setState({status: 'success', error: null, user})
    } catch (error) {
      setState({status: 'error', error: error.message, user: null})
    }
  }

  const logout = async () => {
    try {
      await destabilize().then(() => window.localStorage.removeItem(rsbUserKey))
      setState({status: 'success', error: null, user: null})
    } catch (error) {
      setState({status: 'error', error: error.message, user: null})
    }
  }

  const value = {state, login, logout}

  return (
    <AuthContext.Provider value={value}>
      {state.status === 'error' ? <Error error={state.error} /> : children}
    </AuthContext.Provider>
  )
}

function useAuthState() {
  const {login, logout, state} = React.useContext(AuthContext)
  const isError = state.status === 'error'
  const isSuccess = state.status === 'success'
  const isAuthenticated = state.user && isSuccess
  return {
    ...state,
    isError,
    isSuccess,
    isAuthenticated,
    login,
    logout,
  }
}

export {AuthProvider, useAuthState}