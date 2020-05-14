import React from 'react'
import Logout from './Logout'

const Header = () => (
  <header className="header-container">
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
    </div>
  </header>
)

export default Header
