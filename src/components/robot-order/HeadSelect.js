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
      <label htmlFor="head">Head:</label>
      <select id="head" name="head" required className="custom-select">
        {options}
      </select>
    </div>
  )
}

export default HeadSelect
