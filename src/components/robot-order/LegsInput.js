function LegsInput({dynamicId}) {
  return (
    <div className="form-group">
      <label htmlFor={dynamicId}>3. Legs:</label>
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

export default LegsInput
