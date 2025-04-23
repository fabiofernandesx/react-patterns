import { UserInfo } from './components/user-info'
import { CurrentUserInfo } from './components/current-user-info'

const App = () => {
  return (
    <>
      <h1>Custom Hooks</h1>
      <h2>Current User</h2>
      <CurrentUserInfo />
      <hr />
      <h2>Specific User</h2>
      <UserInfo userId={2} />
    </>
  )
}
export default App
