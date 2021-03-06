import React from 'react'
import Logout from './Logout'
import {Link, useLocation} from 'react-router-dom'

const Header = () => {
  const {pathname} = useLocation()

  return (
    <header className={`header-container`}>
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
              to="/robot-order"
              className={`nav-link${
                pathname === '/robot-order' ? ' active' : ''
              }`}
            >
              Order your robot!
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
