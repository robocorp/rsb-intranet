import React from 'react'

function RobotPreview({head, body, legs}) {
  return (
    <>
      {head && body && legs && <p>Admire your robot!</p>}
      <div id="robot-preview"></div>
      {head && <img src={`/heads/${head}.png`} alt="Head"></img>}
      {body && <img src={`/bodies/${body}.png`} alt="Body"></img>}
      {legs && <img src={`/legs/${legs}.png`} alt="Legs"></img>}
    </>
  )
}

export default RobotPreview
