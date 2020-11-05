import React, {useState} from 'react'
import ModelTable from './ModelTable'
import RandomError from './RandomError'
import RobotPreview from './RobotPreview'
import parts from './parts'

const getDynamicId = () => Date.now().toString()
const randomError = () => Math.random() >= 0.5

function RobotOrderForm() {
  const [head, setHead] = useState('')
  const [body, setBody] = useState('')
  const [legs, setLegs] = useState('')
  const [dynamicId, setDynamicId] = useState(getDynamicId())
  const [error, setError] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setHead('')
    setBody('')
    setLegs('')

    if (randomError()) {
      setError(true)
    } else {
      const formData = new FormData(e.target)
      setHead(formData.get('head'))
      setBody(formData.get('body'))
      setLegs(formData.get(dynamicId))
      setDynamicId(getDynamicId())
      setError(false)
    }
  }

  return (
    <>
      <div className="row">
        <div className="col-sm">
          {error && <RandomError />}
          <p>
            Everyone needs a robot, but all needs are unique. Build your own
            robot, and we ship it to you as an easy-to-assemble package
            delivered straight to your front door!
          </p>
          <form onSubmit={handleSubmit}>
            <Head />
            <Body />
            <Legs dynamicId={dynamicId} />
            <Address />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="col-sm">
          <ModelTable parts={parts} />
          <RobotPreview head={head} body={body} legs={legs} />
        </div>
      </div>
    </>
  )
}

function Head() {
  const options = parts.map(part => (
    <option value={part.number} key={part.number}>
      {`${part.name} head`}
    </option>
  ))

  options.unshift(
    <option value="" key="0">
      -- Choose a head --
    </option>,
  )

  return (
    <div className="form-group">
      <p className="form-text text-muted">
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
  const options = parts.map(part => (
    <div className="form-check" key={part.number}>
      <input
        className="form-check-input"
        type="radio"
        value={part.number}
        name="body"
        required
      />
      <label className="form-check-label" htmlFor={part.number}>
        {`${part.name} body`}
      </label>
    </div>
  ))

  return (
    <div className="form-group">
      <p className="form-text text-muted">
        Requests can be submitted without a body, but not in our store. Pick up
        a body!
      </p>
      {options}
    </div>
  )
}

function Legs({dynamicId}) {
  return (
    <div className="form-group">
      <p className="form-text text-muted">
        A robot crawling legless on the factory floor is a thing for nightmares.
        Leg it up!
      </p>

      <input
        className="form-control"
        type="number"
        min="1"
        max="6"
        id={dynamicId}
        name={dynamicId}
        placeholder="Enter the part number for the legs"
        required
      />
    </div>
  )
}

function Address() {
  return (
    <div className="form-group">
      <p className="form-text text-muted">
        Where do you want your robot shipped?
      </p>
      <input
        className="form-control"
        type="text"
        id="address"
        name="address"
        placeholder="Shipping address"
        required
      />
    </div>
  )
}

export default RobotOrderForm
