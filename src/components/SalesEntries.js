import React, {useState} from 'react'
import formatNumber from '../utils/format'

function SalesEntries({salesEntries}) {
  const [showPerformance, setShowPerformance] = useState(false)

  const handleSubmit = event => setShowPerformance(!showPerformance)

  let salesEntryElements = null

  if (salesEntries.length > 0) {
    salesEntryElements = salesEntries.map(salesEntry => {
      return (
        <>
          <tr key={salesEntry.lastName}>
            <td>
              {salesEntry.firstName} {salesEntry.lastName}
            </td>
            <td>${formatNumber(salesEntry.salesTarget)}</td>
            <td>${formatNumber(salesEntry.salesResult)}</td>
            <td>
              ${formatNumber(salesEntry.salesResult - salesEntry.salesTarget)}
            </td>
          </tr>
          {showPerformance && <Performance salesEntry={salesEntry} />}
        </>
      )
    })

    return (
      <>
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Target</th>
              <th scope="col">Result</th>
              <th scope="col">Difference</th>
            </tr>
          </thead>
          <tbody>{salesEntryElements}</tbody>
        </table>
        <ViewPerformanceButton
          handleSubmit={handleSubmit}
          showPerformance={showPerformance}
        />
      </>
    )
  }

  return null
}

function Performance({salesEntry}) {
  const {salesTarget, salesResult} = salesEntry

  const analyzePerformance = (salesTarget, salesResult) => {
    const ratio = salesResult / salesTarget

    return ratio > 10
      ? 'Holy macaroni!'
      : ratio > 5
      ? 'Magnificent!'
      : ratio > 1
      ? 'A positive result. Well done!'
      : ratio > 0.75
      ? 'Hmm. Did not quite make it.'
      : ratio > 0.5
      ? 'Well. It was a nice attempt. I guess?'
      : ratio > 0.25
      ? 'Oh dear.'
      : 'The boss wants to see you...'
  }

  return (
    <tr>
      <td colSpan="4">
        <span className="performance">
          {analyzePerformance(salesTarget, salesResult)}
        </span>
      </td>
    </tr>
  )
}

function ViewPerformanceButton({handleSubmit, showPerformance}) {
  const label = showPerformance ? 'Hide performance' : 'Show performance'

  return (
    <button onClick={handleSubmit} type="submit" className="btn btn-primary">
      {label}
    </button>
  )
}

export default SalesEntries
