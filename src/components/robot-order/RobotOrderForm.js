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
  const options = ['', 1, 2, 3, 4, 5, 6].map(number => (
    <option value={number} key={number}>
      {number}
    </option>
  ))

  return (
    <div className="form-group">
      <p class="form-text text-muted">
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
  const options = [1, 2, 3, 4, 5, 6].map(number => (
    <div className="form-check form-check-inline" key={number}>
      <input
        className="form-check-input"
        type="radio"
        value={number}
        name="body"
        required
      />
      <label className="form-check-label" htmlFor={number}>
        {number}
      </label>
    </div>
  ))

  return (
    <div className="form-group">
      <p class="form-text text-muted">
        Requests can be submitted without a body, but not in our store. Pick up
        a body!
      </p>
      {options}
    </div>
  )
}

function Legs() {
  return (
    <div className="form-group">
      <p class="form-text text-muted">
        A robot crawling legless on the factory floor is a thing for nightmares.
        Leg it up!
      </p>
      <input
        className="form-control"
        type="number"
        id="legs"
        name="legs"
        placeholder="Enter a number for the legs"
        required
      />
    </div>
  )
}

export default RobotOrderForm
