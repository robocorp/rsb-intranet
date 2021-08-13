import React, {useState} from 'react'
import SalesCounter from './SalesCounter'
import formatNumber from '../utils/format'

function SalesEntries({salesEntries, onDeleteAllSalesEntries}) {
  const [showPerformance, setShowPerformance] = useState(false)

  const handleSubmit = event => setShowPerformance(!showPerformance)

  let salesEntryElements = null

  if (salesEntries.length > 0) {
    salesEntryElements = salesEntries.map(salesEntry => {
      return (
        <React.Fragment key={salesEntry.lastName}>
          <tr>
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
        </React.Fragment>
      )
    })

    return (
      <>
        <SalesCounter salesEntries={salesEntries} />
        <div id="sales-results">
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th width="24%" scope="col">
                  Name
                </th>
                <th width="24%" scope="col">
                  Target
                </th>
                <th width="24%" scope="col">
                  Result
                </th>
                <th width="24%" scope="col">
                  Difference
                </th>
              </tr>
            </thead>
            <tbody>{salesEntryElements}</tbody>
          </table>
        </div>

        <div className="btn-group d-flex" role="group" aria-label="Operations">
          <ViewPerformanceButton
            handleSubmit={handleSubmit}
            showPerformance={showPerformance}
          />
          &nbsp;
          <DeleteAllSalesEntriesButton onClick={onDeleteAllSalesEntries} />
        </div>
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
      : ratio >= 1
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
    <button
      onClick={handleSubmit}
      type="submit"
      className="btn btn-info btn-secondary"
    >
      {label}
    </button>
  )
}

function DeleteAllSalesEntriesButton({onClick}) {
  return (
    <button
      onClick={onClick}
      type="submit"
      className="btn btn-danger btn-secondary"
    >
      Delete all sales entries
    </button>
  )
}

export default SalesEntries
