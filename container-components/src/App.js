import React from 'react'

import { UserInfo } from './components/user-info'
import { BookInfo } from './components/book-info'
import { ResourceLoader } from './components/resource-loader'

function App() {
  return (
    <>
      <ResourceLoader
        resourceUrl={'http://localhost:9090/users/2'}
        resourceName={'user'}
      >
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader
        resourceUrl={'http://localhost:9090/books/2'}
        resourceName={'book'}
      >
        <BookInfo />
      </ResourceLoader>
    </>
  )
}

export default App
