import React from 'react'

function RobotPreview({head, body, legs}) {
  return (
    <div id="robot-preview">
      {head && body && legs && (
        <>
          <p>Admire your robot!</p>
          <div id="robot-preview-image">
            {head && <img src={`/heads/${head}.png`} alt="Head"></img>}
            {body && <img src={`/bodies/${body}.png`} alt="Body"></img>}
            {legs && <img src={`/legs/${legs}.png`} alt="Legs"></img>}
          </div>
          <a
            className="attribution"
            href="https://www.vecteezy.com/free-vector/robotics"
          >
            Robotics Vectors by Vecteezy
          </a>
        </>
      )}
    </div>
  )
}

export default RobotPreview
