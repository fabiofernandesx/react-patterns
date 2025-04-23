import { ControlledForm } from './components/controlled-form'
import { UncontrolledForm } from './components/uncontrolled-form'

export default function App() {
  return (
    <>
      <div>
        <h2>Uncontrolled Form</h2>
        <UncontrolledForm />
        <hr />
        <h2>Controlled Form</h2>
        <ControlledForm />
      </div>
    </>
  )
}
