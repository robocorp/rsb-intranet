import React from 'react'
import body1 from './bodies/1.png'
import body2 from './bodies/2.png'
import body3 from './bodies/3.png'
import body4 from './bodies/4.png'
import body5 from './bodies/5.png'
import body6 from './bodies/6.png'
import head1 from './heads/1.png'
import head2 from './heads/2.png'
import head3 from './heads/3.png'
import head4 from './heads/4.png'
import head5 from './heads/5.png'
import head6 from './heads/6.png'
import legs1 from './legs/1.png'
import legs2 from './legs/2.png'
import legs3 from './legs/3.png'
import legs4 from './legs/4.png'
import legs5 from './legs/5.png'
import legs6 from './legs/6.png'

function RobotOrderForm() {
  return (
    <>
      <Head />
      <Body />
      <Legs />
    </>
  )
}

function Head() {
  const options = ['Choose a head', 1, 2, 3, 4, 5, 6].map(number => (
    <option value={number} key={number}>
      {number}
    </option>
  ))

  return (
    <div className="form-group">
      <label htmlFor="head">Head</label>
      <p>
        Headless robots <i>are</i> a thing, but ours only work with one
        attached. Head along and choose one!
      </p>
      <select id="head" required className="custom-select">
        {options}
      </select>
    </div>
  )
}

function Body() {
  const options = ['Choose a body', 1, 2, 3, 4, 5, 6].map(number => (
    <option value={number} key={number}>
      {number}
    </option>
  ))

  return (
    <div className="form-group">
      <label htmlFor="body">Body</label>
      <p>
        Requests can be submitted without a body, but not in our store. Pick up
        a body!
      </p>
      <select id="body" required className="custom-select">
        {options}
      </select>
    </div>
  )
}

function Legs() {
  const options = ['Choose legs', 1, 2, 3, 4, 5, 6].map(number => (
    <option value={number} key={number}>
      {number}
    </option>
  ))

  return (
    <div className="form-group">
      <label htmlFor="legs">Legs</label>
      <p>
        A robot crawling legless on the factory floor is a thing for nightmares.
        Leg it up!
      </p>
      <select id="legs" required className="custom-select">
        {options}
      </select>
    </div>
  )
}

export default RobotOrderForm
