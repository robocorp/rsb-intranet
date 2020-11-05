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
    <div className="form-group">
      <label htmlFor="body">Body:</label>
      {options}
    </div>
  )
}

export default BodyRadios
