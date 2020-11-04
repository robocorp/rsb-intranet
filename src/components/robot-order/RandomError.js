import React from 'react'

const errors = [
  'Internal Server Error',
  'External Server Error',
  'Extraterrestrial Server Error',
  'Expected Server Error',
  'Unexpected Server Error',
  'Yet Another Server Error',
  'Guess what? A server Error!',
  'Server In Flames Error',
  'Server Room Flooded Error',
  'Request Got Lost Error',
  'Have You Tried Turning It On And Off Again?',
  'My Dog Ate My Server Error',
  'Error: Could Not Load Error Message',
  'Who Came Up With These Annoying Errors?!',
  'Server Out Of Ink Error',
  'Bear In Server Room Error',
  'Server Feeling Slightly Sick Error',
  'Internal Server Error',
  'Submit Button Stuck Error',
]

function RandomError() {
  const error = errors[Math.floor(Math.random() * errors.length)]
  return (
    <div className="alert alert-danger" role="alert">
      {error}
    </div>
  )
}

export default RandomError
