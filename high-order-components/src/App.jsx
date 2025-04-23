import { includeUser } from './components/include-user'
import { logProps } from './components/log-props'
import { UserInfoForm } from './components/user-form'
import { UserFormGeneric } from './components/user-form-generic'
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
      <hr />
      <h2>Updatable User</h2>
      <UserInfoForm />
      <hr />
      <h2>Updatable User With Generic Update Function</h2>
      <UserFormGeneric />
    </>
  )
}
export default App
