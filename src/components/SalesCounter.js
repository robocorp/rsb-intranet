import React from 'react'
import formatNumber from '../utils/format'

function SalesCounter({salesEntries}) {
  const entries = salesEntries.length

  const actualSales = salesEntries.reduce(
    (accumulator, currentValue) =>
      accumulator + parseInt(currentValue.salesResult),
    0,
  )

  const expectedSales = salesEntries.reduce(
    (accumulator, currentValue) =>
      accumulator + parseInt(currentValue.salesTarget),
    0,
  )

  return (
    <div className="alert alert-dark sales-summary" role="alert">
      <div>
        <span>Active sales people:</span>
        <span>{entries}</span>
      </div>
      <div>
        <span>Expected sales:</span>
        <span>${formatNumber(expectedSales)}</span>
      </div>
      <div>
        <span>Actual sales:</span>
        <span>${formatNumber(actualSales)}</span>
      </div>
      <div>
        <span>Difference:</span>
        <span>${formatNumber(actualSales - expectedSales)}</span>
      </div>
    </div>
  )
}

export default SalesCounter
