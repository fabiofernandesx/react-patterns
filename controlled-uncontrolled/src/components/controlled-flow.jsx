import React from 'react'

export const ControlledFlow = ({
  children,
  currentStepIndex,
  onNext,
}) => {
  const next = (data) => {
    onNext(data)
  }

  const currentChild = React.Children.toArray(children)[currentStepIndex]

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { next })
  }

  return currentChild
}
