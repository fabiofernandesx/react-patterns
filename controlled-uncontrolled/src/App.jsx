import { useState } from 'react'
import { ControlledForm } from './components/controlled-form'
import { ControlledModal } from './components/controlled-modal'
import { UncontrolledForm } from './components/uncontrolled-form'

export default function App() {
  const [showModal, setShowModal] = useState(false)
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
      </div>
    </>
  )
}
