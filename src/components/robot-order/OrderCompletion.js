import React from 'react'

function OrderCompletion() {
  return (
    <div id="order-completion">
      <div id="receipt" className="alert alert-success" role="alert">
        <h3>Receipt</h3>
        <OrderTime />
        <OrderId />
        <p>
          Thank you for your order! We will ship your robot to you as soon as
          our warehouse robots gather the parts you ordered! You will receive
          your robot in no time!
        </p>
      </div>
      <OrderAnotherButton />
    </div>
  )
}

function OrderId() {
  const prefix = 'RSB-ROBO-ORDER-'
  const id = prefix + Math.random().toString(36).substring(3).toUpperCase()
  return <p class="badge badge-success">{id}</p>
}

function OrderTime() {
  return <div>{new Date().toISOString()}</div>
}

function OrderAnotherButton() {
  return (
    <button
      id="order-another"
      type="submit"
      className="btn btn-primary"
      onClick={() => window.location.replace('/robot-order')}
    >
      Order another robot
    </button>
  )
}

export default OrderCompletion
