import React from 'react'

import { UserInfo } from './components/user-info'
import { BookInfo } from './components/book-info'
import { ResourceLoader } from './components/resource-loader'
import { DataSource } from './components/data-source'
import { DataSourceRender } from './components/data-source-render'

const getDataFromServer = async (url) => {
  return fetch(url).then((response) => response.json())
}
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

      <hr />

      <DataSource
        getData={() => getDataFromServer('http://localhost:9090/users/1')}
        resourceName={'user'}
      >
        <UserInfo />
      </DataSource>

      <hr />

      <DataSourceRender
        getData={() => getDataFromServer('http://localhost:9090/books/1')}
        render={(book) => <BookInfo book={book} />}
      />
    </>
  )
}

export default App
