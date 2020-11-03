import React from 'react'
import body1 from './bodies/1.png'
import body2 from './bodies/2.png'
import body3 from './bodies/3.png'
import body4 from './bodies/4.png'
import body5 from './bodies/5.png'
import body6 from './bodies/6.png'
import head1 from './heads/1.png'
import head2 from './heads/2.png'
import head3 from './heads/3.png'
import head4 from './heads/4.png'
import head5 from './heads/5.png'
import head6 from './heads/6.png'
import legs1 from './legs/1.png'
import legs2 from './legs/2.png'
import legs3 from './legs/3.png'
import legs4 from './legs/4.png'
import legs5 from './legs/5.png'
import legs6 from './legs/6.png'

function RobotPreview() {
  return (
    <>
      <p>Admire your robot!</p>
      <div id="robot-preview"></div>
      <img src={head4}></img>
      <img src={body1}></img>
      <img src={legs6}></img>
    </>
  )
}

export default RobotPreview
