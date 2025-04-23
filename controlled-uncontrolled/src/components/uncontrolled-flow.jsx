import React, { useState } from "react"

export const UncontrolledFlow = ({children, onDone}) => {
  const [data,setData] = useState({})
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  const currentChild = React.Children.toArray(children)[currentStepIndex]

  return (
    <div>
      {currentChild}
      <button onClick={() => {
        if (currentStepIndex < React.Children.count(children) - 1) {
          setCurrentStepIndex(currentStepIndex + 1)
        } else {
          onDone(data)
        }
      }}>Next</button>
    </div>
  )
}