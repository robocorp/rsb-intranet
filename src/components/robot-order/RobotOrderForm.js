import React, {useState} from 'react'
import AddressInput from './AddressInput'
import BodyRadios from './BodyRadios'
import HeadSelect from './HeadSelect'
import LegsInput from './LegsInput'
import ModelTable from './ModelTable'
import OrderButton from './OrderButton'
import OrderCompletion from './OrderCompletion'
import PreviewButton from './PreviewButton'
import RandomError from './RandomError'
import RobotPreview from './RobotPreview'

import parts from './parts'

const getDynamicId = () => Date.now().toString()
const randomError = () => Math.random() >= 0.7

function RobotOrderForm() {
  const [head, setHead] = useState('')
  const [body, setBody] = useState('')
  const [legs, setLegs] = useState('')
  const [address, setAddress] = useState('')
  const [dynamicId, setDynamicId] = useState(getDynamicId())
  const [error, setError] = useState(false)
  const [completed, setCompleted] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    const action = e.nativeEvent.submitter.id
    handlePreview(e)
    if (action === 'order') {
      handleOrder(e)
    }
  }

  const handlePreview = e => {
    const formData = new FormData(e.target)
    setHead(formData.get('head'))
    setBody(formData.get('body'))
    setLegs(formData.get(dynamicId))
    setAddress(formData.get('address'))
    setDynamicId(getDynamicId())
    setError(false)
  }

  const handleOrder = e => {
    if (randomError()) {
      setError(true)
    } else {
      setError(false)
      setCompleted(true)
    }
  }

  return (
    <>
      <div className="row">
        <div className="col-sm-7">
          {error && <RandomError />}
          <p>
            Everyone needs a robot, but all needs are unique. Build your own
            robot, and we ship it to you as an easy-to-assemble package
            delivered straight to your front door!
          </p>
          {!error && completed && (
            <OrderCompletion
              head={head}
              body={body}
              legs={legs}
              address={address}
            />
          )}
          {!completed && (
            <form onSubmit={handleSubmit}>
              <HeadSelect parts={parts} />
              <BodyRadios parts={parts} />
              <LegsInput dynamicId={dynamicId} />
              <AddressInput />
              <PreviewButton />
              <OrderButton />
            </form>
          )}
        </div>
        <div className="col-sm-5">
          {!completed && <ModelTable parts={parts} />}
          <RobotPreview head={head} body={body} legs={legs} />
        </div>
      </div>
    </>
  )
}

export default RobotOrderForm
