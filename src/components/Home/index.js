// Write your code here
import './index.css'
import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {logged: true}

  render() {
    const {logged} = this.state
    return (
      <div className="app-container">
        <div className="bg-container">
          <Message message={logged ? 'Welcome User' : 'Please Login'} />
          {!logged && <Login />}
          {logged && <Logout />}
        </div>
      </div>
    )
  }
}

export default Home
