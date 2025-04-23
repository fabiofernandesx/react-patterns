import { useEffect, useState } from 'react'
import axios from 'axios'

export const includeUser = (Component, userId) => {
  return (props) => {
    const [user, setUser] = useState(null)
    useEffect(() => {
      axios.get(`http://localhost:9090/users/${userId}`).then((response) => {
        setUser(response.data)
      })
    }, [userId])
    return <Component {...props} user={user} />
  }
}
