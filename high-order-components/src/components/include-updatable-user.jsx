import { useEffect, useState } from 'react'
import axios from 'axios'

export const includeUpdatableUser = (Component, userId) => {
  return (props) => {
    const [initialUser, setInitialUser] = useState(null)
    const [user, setUser] = useState(null)
    useEffect(() => {
      axios.get(`http://localhost:9090/users/${userId}`).then((response) => {
        setInitialUser(response.data)
        setUser(response.data)
      })
    }, [userId])
    const handleUpdates = (updates) => {
      setUser({ ...user, ...updates })
    }
    const SaveUser = async () => {
      const response = await axios.post(
        `http://localhost:9090/users/${userId}`,
        { user: user }
      )
      setInitialUser(response.data)
      setUser(response.data)
    }
    const ResetUser = () => {
      setUser(initialUser)
    }
    return (
      <Component
        {...props}
        user={user}
        onChangeUser={handleUpdates}
        onPostUser={SaveUser}
        onResetUser={ResetUser}
      />
    )
  }
}
