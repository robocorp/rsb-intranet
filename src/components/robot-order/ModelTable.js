import React, {useState} from 'react'

function ToggleButton({show, handleOnClick}) {
  const label = show ? 'Hide model info' : 'Show model info'
  return (
    <button className="btn btn-secondary" onClick={handleOnClick}>
      {label}
    </button>
  )
}

function ModelTable({parts}) {
  const [show, setShow] = useState(false)

  const handleOnClick = e => {
    setShow(!show)
  }

  const tableHeader = (
    <thead>
      <tr>
        <th>Model name</th>
        <th>Part number</th>
      </tr>
    </thead>
  )
  const rows = parts.map(part => {
    return (
      <tr key={part.number}>
        <td>{part.name}</td>
        <td>{part.number}</td>
      </tr>
    )
  })

  return (
    <div className="mb-3">
      <ToggleButton show={show} handleOnClick={handleOnClick} />
      {show && (
        <table id="model-info" className="table table-dark">
          {tableHeader}
          <tbody>{rows}</tbody>
        </table>
      )}
    </div>
  )
}

export default ModelTable
