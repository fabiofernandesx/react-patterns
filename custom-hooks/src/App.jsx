import { UserInfo } from './components/user-info'
import { CurrentUserInfo } from './components/current-user-info'
import { UserInfoResource } from './components/user-info2'

const App = () => {
  return (
    <>
      <h1>Custom Hooks</h1>
      <h2>Current User</h2>
      <CurrentUserInfo />
      <hr />
      <h2>Specific User</h2>
      <UserInfo userId={2} />
      <hr />
      <h2>Generic Resource Hook</h2>
      <UserInfoResource />
    </>
  )
}
export default App
