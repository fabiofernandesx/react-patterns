import React from 'react'

import { UserInfo } from './components/user-info'
import { BookInfo } from './components/book-info'
import { ResourceLoader } from './components/resource-loader'
import { DataSource } from './components/data-source'
import { DataSourceRender } from './components/data-source-render'
import { CurrentUserLoader } from './components/current-user-loader'
import { UserLoader } from './components/user-loader'

const getDataFromServer = async (url) => {
  return fetch(url).then((response) => response.json())
}
const getDataFromLocalStorage = async (key) => () => {
  localStorage.setItem(key, 'Message from local storage')
  return localStorage.getItem(key)
}

const GetMessage = ({ message }) => <h1>{message}</h1>
function App() {
  return (
    <>
      <h1>Container Components</h1>
      <h2>Current User Loader</h2>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
      <hr />
      <h2>User Loader</h2>
      <UserLoader userId={1}>
        <UserInfo />
      </UserLoader>
      <hr />
      <h2>Resource Loader</h2>
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
      <h2>Data Source</h2>
      <DataSource
        getData={() => getDataFromServer('http://localhost:9090/users/1')}
        resourceName={'user'}
      >
        <UserInfo />
      </DataSource>

      <hr />
      <h2>Data Source with Render</h2>
      <DataSourceRender
        getData={() => getDataFromServer('http://localhost:9090/books/1')}
        render={(book) => <BookInfo book={book} />}
      />

      <hr />
      <h2>Data Source with Local Storage</h2>
      <DataSource
        getData={() => getDataFromLocalStorage('anyKey')}
        resourceName={'message'}
      >
        <GetMessage />
      </DataSource>
    </>
  )
}

export default App
