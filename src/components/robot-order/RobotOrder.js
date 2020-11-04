import React from 'react'
import AnnoyingNotice from './AnnoyingNotice'
import RobotOrderForm from './RobotOrderForm'

function RobotOrder() {
  return (
    <>
      <div className="container">
        <h2>Build your robot!</h2>
        <RobotOrderForm />
      </div>
      <AnnoyingNotice />
    </>
  )
}

export default RobotOrder
