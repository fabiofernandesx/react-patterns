import React from 'react'

export const UncontrolledForm = () => {
  const nameInputRef = React.createRef()

  const ageInputRef = React.createRef()

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(nameInputRef.current.value)
    console.log(ageInputRef.current.value)
  }
  return (
    <form onSubmit={submitHandler}>
      <input type='text' name='name' placeholder='Name' ref={nameInputRef} />
      <input
        type='number'
        name='age'
        placeholder='Enter your age'
        ref={ageInputRef}
      />
      <button type='submit'>Submit</button>
    </form>
  )
}
