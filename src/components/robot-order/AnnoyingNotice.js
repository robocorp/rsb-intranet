import React, {useState} from 'react'

function AnnoyingNotice() {
  const [showModal, setShowModal] = useState(true)

  const handleOnClick = e => {
    setShowModal(false)
  }

  const style = showModal ? {display: 'block'} : {display: 'none'}

  return (
    <div className="modal" tabIndex="-1" role="dialog" style={style}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-body">
              <p>
                I give up all my constitutional rights for the benefit of
                RobotSpareBin Industries Inc.
              </p>
              <div>
                <span className="btn btn-dark" onClick={handleOnClick}>
                  OK
                </span>
                <span className="btn btn-warning" onClick={handleOnClick}>
                  Yep
                </span>
                <span className="btn btn-danger" onClick={handleOnClick}>
                  I guess so...
                </span>
                <span className="btn btn-success">No way!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnnoyingNotice
