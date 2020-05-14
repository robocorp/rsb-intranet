import React from 'react'

function Info() {
  return (
    <div className="alert alert-info" role="alert">
      <h4>Hey! Wait a minute... What is this site?</h4>
      <hr></hr>
      <p>
        This is a demonstration site built by {}
        <a href="https://www.robocorp.com">Robocorp</a>. We use it for demos and
        our learning courses. Think about it as a gym for Software Robots!
      </p>

      <p>
        You are absolutely free to play around with it. Mind you, sometimes it's
        intentionally a bit buggy!&nbsp;
        <span role="img" aria-label="sweating smily face emoticon">
          😅
        </span>
      </p>

      <p>
        If this sounds interesting,{' '}
        <a href="https://hub.robocorp.com">visit us</a> to learn how to make
        your own Software Robots!
      </p>
    </div>
  )
}

export default Info
