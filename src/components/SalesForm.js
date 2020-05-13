import React, {useState} from 'react'
import SalesEntries from './SalesEntries'

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
        <div class="col-sm">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstname">First name</label>
              <input
                type="text"
                id="firstname"
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Last name</label>
              <input
                type="text"
                id="lastname"
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="salestarget">Sales target ($)</label>
              <input
                type="number"
                id="salestarget"
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="salesresult">Sales result ($)</label>
              <input
                type="number"
                id="salesresult"
                required
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div class="col-sm">
          <SalesEntries
            salesEntries={salesEntries}
            onDeleteAllSalesEntries={onDeleteAllSalesEntries}
          />
        </div>
      </div>
    </div>
  )
}

export default SalesForm
