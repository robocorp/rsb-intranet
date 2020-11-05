function HeadSelect({parts}) {
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
      <label htmlFor="head">1. Head:</label>
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

export default HeadSelect
