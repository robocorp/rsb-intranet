import React from 'react'
import RobotOrderForm from './RobotOrderForm'

function RobotOrder() {
  return (
    <>
      <div className="container">
        <h2>Build your robot!</h2>
        <p>
          Everyone needs a robot, but all needs are unique. Build your own
          robot, and we ship it to you as an easy-to-assemble package delivered
          straight to your front door!
        </p>
        <RobotOrderForm />
      </div>
    </>
  )
}

export default RobotOrder
