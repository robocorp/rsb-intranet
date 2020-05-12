import React from 'react'
import guruMedidation from './guru-meditation.gif'

const Error = ({error}) => (
  <div className="container error">
    <div className="alert alert-danger" role="alert">
      {error}
    </div>
    <div>
      <img src={guruMedidation} alt="Error" />
    </div>
  </div>
)

export default Error
