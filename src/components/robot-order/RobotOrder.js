import React from 'react'
import RobotOrderForm from './RobotOrderForm'
import RobotPreview from './RobotPreview'

function RobotOrder() {
  return (
    <>
      <div className="container">
        <h2>Build your robot!</h2>
        <p>
          Everyone needs a robot, but all needs are unique. Build your own robot
          and we ship it to you as easy-to-assemble package, delivered straight
          to your front door!
        </p>
        <div className="row">
          <div className="col-sm">
            <RobotOrderForm />
          </div>
          <div className="col-sm">
            <RobotPreview />
          </div>
        </div>
      </div>
    </>
  )
}

export default RobotOrder
