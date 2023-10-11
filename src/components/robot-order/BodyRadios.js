function BodyRadios({parts}) {
  const options = parts.map(part => (
    <div className="radio form-check" key={part.number}>
      <label htmlFor={`id-body-${part.number}`}>
        <input
          className="form-check-input"
          type="radio"
          value={part.number}
          name="body"
          id={`id-body-${part.number}`}
          required
        />
        {`${part.name} body`}
      </label>
    </div>
  ))

  return (
    <div className="mb-3">
      <label htmlFor="body">2. Body:</label>
      <p className="form-text text-muted">
        Requests can be submitted without a body, but not in our store. Pick up
        a body!
      </p>

      <div className="stacked">{options}</div>
    </div>
  )
}

export default BodyRadios
