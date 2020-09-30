import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import {useAuthState} from '../contexts/auth'
import Logout from './Logout'

const Header = () => {
  const {user} = useAuthState()
  const {pathname} = useLocation()

  return (
    <header className={`header-container${user ? ' auth' : ''}`}>
      <div className="container">
        <Logout />
        <h1>
          <span role="img" aria-label="emoticon robot">
            🤖
          </span>
          <span role="img" aria-label="emoticon gear">
            ⚙️
          </span>{' '}
          RobotSpareBin Industries Inc.{' '}
        </h1>
        <h5>
          The leader in refurbished and dubious quality spare parts for robots,
          since 1982!
        </h5>
        {user && (
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link${pathname === '/' ? ' active' : ''}`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/feedback"
                className={`nav-link${
                  pathname === '/feedback' ? ' active' : ''
                }`}
              >
                Feedback
              </Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  )
}

export default Header
