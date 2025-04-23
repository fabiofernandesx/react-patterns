import { logProps } from './components/log-props'
import { UserInfo } from './components/user-info'

const UserInfoWrapper = logProps(UserInfo)
const App = () => {
  return (
    <>
      <h1>High Order Components</h1>
      <UserInfoWrapper />
    </>
  )
}
export default App
