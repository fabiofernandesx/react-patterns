import { useEffect, useState } from 'react'

export const useCurrentUser = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('http://localhost:9090/current-user')
      .then((response) => response.json())
      .then((data) => setUser(data))
  }, [])
  return user
}
