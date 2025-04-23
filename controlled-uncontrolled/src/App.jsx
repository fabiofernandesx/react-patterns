import { useState } from 'react'
import { ControlledForm } from './components/controlled-form'
import { ControlledModal } from './components/controlled-modal'
import { UncontrolledForm } from './components/uncontrolled-form'
import { UncontrolledFlow } from './components/uncontrolled-flow'
import { ControlledFlow } from './components/controlled-flow'

const StepOne = ({ next }) => {
  return (
    <>
      <h1>Step #1: Enter your name</h1>
      <button onClick={() => next({ name: 'TestName' })}>Next</button>
    </>
  )
}
const StepTwo = ({ next }) => {
  return (
    <>
      <h1>Step #2: Enter your age</h1>
      <button onClick={() => next({ age: 30 })}>Next</button>
    </>
  )
}
const StepThree = ({ next }) => {
  return (
    <>
      <h1>Step #3: You qualify!</h1>
      <button onClick={() => next({})}>Next</button>
    </>
  )
}

const StepFour = ({ next }) => {
  return (
    <>
      <h1>Step #4: Enter your country</h1>
      <button onClick={() => next({ country: 'Poland' })}>Next</button>
    </>
  )
}

export default function App() {
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState({})
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  const next = (dataFromStep) => {
    setData(dataFromStep)
    setCurrentStepIndex(currentStepIndex + 1)
  }

  return (
    <>
      <div>
        <h2>Uncontrolled Form</h2>
        <UncontrolledForm />
        <hr />
        <h2>Controlled Form</h2>
        <ControlledForm />
        <h2>Controlled Modal</h2>
        <button onClick={() => setShowModal(!showModal)}>
          {showModal ? 'Close' : 'Open'} Modal
        </button>
        <ControlledModal
          shouldShow={showModal}
          close={() => setShowModal(false)}
        >
          <h4>Modal Content</h4>
        </ControlledModal>
        <hr />
        <h2>Uncontrolled Flow</h2>
        <UncontrolledFlow>
          <h4>Step 1</h4>
          <h4>Step 2</h4>
          <h4>Step 3</h4>
        </UncontrolledFlow>
        <hr />
        <h2>Controlled Flow</h2>
        <ControlledFlow currentStepIndex={currentStepIndex} onNext={next}>
          <StepOne />
          <StepTwo />
          {data.age > 25 && <StepThree />}
          <StepFour />
        </ControlledFlow>
      </div>
    </>
  )
}
