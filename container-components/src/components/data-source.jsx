import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const DataSource = ({ getData = () => {}, resourceName, children }) => {
  const [resource, setResource] = useState(null)
  useEffect(() => {
    getData().then((data) => {
      setResource(data)
    })
  }, [getData])
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
