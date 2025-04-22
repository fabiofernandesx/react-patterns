import { useEffect, useState } from 'react'

export const DataSourceRender = ({ getData = () => {}, render }) => {
  const [resource, setResource] = useState(null)
  useEffect(() => {
    getData().then((data) => {
      setResource(data)
    })
  }, [getData])
  return render(resource)
}
