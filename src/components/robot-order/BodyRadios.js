function BodyRadios({parts}) {
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

export default BodyRadios
