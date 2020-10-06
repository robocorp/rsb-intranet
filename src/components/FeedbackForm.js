import React, {useState} from 'react'

import {useAuthState} from '../contexts/auth'

const FeedbackForm = () => {
  const {user} = useAuthState()
  const [name, setName] = useState(user?.username || '')
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(undefined)
  const [success, setSuccess] = useState(undefined)

  const handleSubmit = async event => {
    if (event) {
      event.preventDefault()
    }

    setError(undefined)
    setSuccess(undefined)
    setSending(true)

    const body = {
      name,
      message,
    }

    try {
      const response = await fetch(`${window.location.origin}/api/feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })

      const result = await response.json()
      setSending(false)

      if (result.error) {
        setError(result.error)
      } else {
        setName('')
        setMessage('')
        setSuccess('Message sent successfully!')
      }
    } catch (error) {
      if (event) {
        // Retry the API call if first time fails
        handleSubmit()
      } else {
        setSending(false)
        setError('Internal error')
      }
    }
  }

  return (
    <>
      <div className="mod">
        <div className="container">
          <h3> Leave feedback</h3>
          <div className="row">
            <div className="col-sm">
              <form id="sales-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={name}
                    onChange={e => {
                      setError(undefined)
                      setSuccess(undefined)
                      setName(e.currentTarget.value)
                    }}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={message}
                    onChange={e => {
                      setError(undefined)
                      setSuccess(undefined)
                      setMessage(e.currentTarget.value)
                    }}
                    className="form-control"
                  />
                </div>
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}
                {success && (
                  <div className="alert alert-success" role="alert">
                    {success}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="btn btn-primary"
                >
                  {sending ? 'Sending...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeedbackForm
