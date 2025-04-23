import { includeUser } from './components/include-user'
import { logProps } from './components/log-props'
import { UserInfo } from './components/user-info'

const UserInfoWrapper = logProps(UserInfo)
const UserInfoWithLoader = includeUser(UserInfo, 1)

const App = () => {
  return (
    <>
      <h1>High Order Components</h1>
      <h2>Log Props</h2>
      <UserInfoWrapper />
      <hr />
      <h2>User Info With Loader</h2>
      <UserInfoWithLoader />
    </>
  )
}
export default App
