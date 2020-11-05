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
                By using this order form, I give up all my constitutional rights
                for the benefit of RobotSpareBin Industries Inc.
              </p>

              <div className="alert-buttons">
                <button
                  type="button"
                  onClick={handleOnClick}
                  className="btn btn-dark"
                >
                  OK
                </button>

                <button
                  type="button"
                  onClick={handleOnClick}
                  className="btn btn-warning"
                >
                  Yep
                </button>
                <button
                  type="button"
                  onClick={handleOnClick}
                  className="btn btn-danger"
                >
                  I guess so...
                </button>
                <button type="button" className="btn btn-success">
                  No way!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnnoyingNotice
