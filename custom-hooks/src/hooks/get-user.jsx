import { useEffect, useState } from 'react'

export const useGetUser = (userId) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:9090/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
  }, [userId])
  return user
}
