import React, {useState} from 'react'
import SalesEntries from './SalesEntries'
import formatNumber from '../utils/format'

const rsbSalesEntriesKey = 'rsbSalesEntries'

const getSalesEntriesFromLocalStorage = () => {
  const salesEntries = window.localStorage.getItem(rsbSalesEntriesKey)
  return salesEntries ? JSON.parse(salesEntries) : []
}

function SalesForm() {
  const [salesEntries, setSalesEntries] = useState(
    getSalesEntriesFromLocalStorage(),
  )

  const handleSubmit = event => {
    const {
      firstname,
      lastname,
      salestarget,
      salesresult,
    } = event.target.elements

    salesEntries.push({
      firstName: firstname.value,
      lastName: lastname.value,
      salesTarget: salestarget.value,
      salesResult: salesresult.value,
    })

    window.localStorage.setItem(
      rsbSalesEntriesKey,
      JSON.stringify(salesEntries),
    )

    setSalesEntries(salesEntries)
  }

  const onDeleteAllSalesEntries = event => {
    window.localStorage.removeItem(rsbSalesEntriesKey)
    setSalesEntries(getSalesEntriesFromLocalStorage())
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <form id="sales-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstname">First name</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Last name</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                required
                className="form-control"
              />
            </div>
            <SalesTargetSelect />
            <div className="form-group">
              <label htmlFor="salesresult">Sales result ($)</label>
              <input
                type="number"
                id="salesresult"
                name="salesresult"
                required
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="col-sm">
          <SalesEntries
            salesEntries={salesEntries}
            onDeleteAllSalesEntries={onDeleteAllSalesEntries}
          />
        </div>
      </div>
    </div>
  )
}

function SalesTargetSelect() {
  const options = []
  const step = 5000
  const max = 100000

  for (let value = step; value <= max; value += step) {
    options.push(
      <option value={value} key={value}>
        ${formatNumber(value)}
      </option>,
    )
  }

  return (
    <div className="form-group">
      <label htmlFor="salestarget">Sales target ($)</label>
      <select id="salestarget" required className="custom-select">
        {options}
      </select>
    </div>
  )
}

export default SalesForm
