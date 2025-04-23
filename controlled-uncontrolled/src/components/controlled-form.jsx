import { useEffect, useState } from 'react'

export const ControlledForm = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (name === '' || age === '') {
      setError('Name and age are required')
    } else {
      setError('')
    }
  }, [name, age])

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(name)
    console.log(age)
  }
  return (
    <form onSubmit={submitHandler}>
      {error && <p>{error}</p>}
      <input
        type='text'
        name='name'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='number'
        name='age'
        placeholder='Enter your age'
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button type='submit'>Submit</button>
    </form>
  )
}
