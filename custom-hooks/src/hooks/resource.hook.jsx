import { useEffect, useState } from 'react'
export const useResource = (resouceUrl) => {
  const [resource, setResource] = useState(null)

  useEffect(() => {
    fetch(resouceUrl)
      .then((response) => response.json())
      .then((data) => setResource(data))
  }, [resouceUrl])

  return resource
}
