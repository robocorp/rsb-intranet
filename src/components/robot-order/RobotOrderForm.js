import React, {useState} from 'react'
import RobotPreview from './RobotPreview'

function RobotOrderForm() {
  const [head, setHead] = useState('')
  const [body, setBody] = useState('')
  const [legs, setLegs] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData(e.target)
    setHead(formData.get('head'))
    setBody(formData.get('body'))
    setLegs(formData.get('legs'))
  }

  return (
    <>
      <div className="row">
        <div className="col-sm">
          <form onSubmit={handleSubmit}>
            <Head />
            <Body />
            <Legs />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="col-sm">
          <RobotPreview head={head} body={body} legs={legs} />
        </div>
      </div>
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
      <p>
        Headless robots <i>are</i> a thing, but ours only work with one
        attached. Head along and choose one!
      </p>
      <select id="head" name="head" required className="custom-select">
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
      <p>
        Requests can be submitted without a body, but not in our store. Pick up
        a body!
      </p>
      <select id="body" name="body" required className="custom-select">
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
      <p>
        A robot crawling legless on the factory floor is a thing for nightmares.
        Leg it up!
      </p>
      <select id="legs" name="legs" required className="custom-select">
        {options}
      </select>
    </div>
  )
}

export default RobotOrderForm
