function LegsInput({dynamicId}) {
  return (
    <div className="form-group">
      <label htmlFor={dynamicId}>Legs:</label>
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
