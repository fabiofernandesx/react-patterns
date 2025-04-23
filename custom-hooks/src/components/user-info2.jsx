import { useResource } from '../hooks/resource.hook'

export const UserInfoResource = () => {
  const user = useResource(`http://localhost:9090/users/2`)
  const { name, age, country, books } = user || {}
  return user ? (
    <>
      <h2>{name}</h2>
      <p>Age: {age} years</p>
      <p>Country: {country}</p>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book}> {book} </li>
        ))}
      </ul>
    </>
  ) : (
    <h1>Loading...</h1>
  )
}
