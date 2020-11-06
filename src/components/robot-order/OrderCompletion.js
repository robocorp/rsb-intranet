import React from 'react'

function OrderCompletion({head, body, legs, address}) {
  return (
    <div id="order-completion">
      <div id="receipt" className="alert alert-success" role="alert">
        <h3>Receipt</h3>
        <OrderTime />
        <OrderId />
        <p>{address}</p>
        <Parts head={head} body={body} legs={legs} />
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

function OrderTime() {
  return <div>{new Date().toISOString()}</div>
}

function OrderId() {
  const prefix = 'RSB-ROBO-ORDER-'
  const id = prefix + Math.random().toString(36).substring(3).toUpperCase()
  return <p class="badge badge-success">{id}</p>
}

function Parts({head, body, legs}) {
  return (
    <div id="parts" className="alert alert-light" role="alert">
      <div>Head: {head}</div>
      <div>Body: {body}</div>
      <div>Legs: {legs}</div>
    </div>
  )
}

function OrderAnotherButton() {
  return (
    <button
      id="order-another"
      type="submit"
      className="btn btn-primary"
      onClick={() => window.location.reload()}
    >
      Order another robot
    </button>
  )
}

export default OrderCompletion
