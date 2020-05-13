import React from 'react'

function SalesEntries({entries}) {
  let entryElements = null

  if (entries.length > 0) {
    entryElements = entries.map(entry => {
      return (
        <tr key={entry.lastName}>
          <td>
            {entry.firstName} {entry.lastName}
          </td>
          <td>${entry.salesTarget}</td>
          <td>${entry.salesResult}</td>
        </tr>
      )
    })

    return (
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Target</th>
            <th scope="col">Result</th>
          </tr>
        </thead>
        <tbody>{entryElements}</tbody>
      </table>
    )
  }

  return null
}

export default SalesEntries
