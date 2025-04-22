import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
  const [resource, setResource] = useState(null)
  useEffect(() => {
    axios.get(resourceUrl).then((response) => {
      setResource(response.data)
    })
  }, [resourceUrl])
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: resource })
        }
        return child
      })}
    </>
  )
}
