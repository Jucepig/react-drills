import React, {Component} from 'react'

class Login extends Component {
  constructor() {
    super()

    this.state = {
      username : '',
      password : '', 
    }

    this.handleUsername = this.handleUsername.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.login = this.login.bind(this)
  }

  handleUsername(val) {
    this.setState({
      username: val
    })
  }

  handlePassword(val) {
    this.setState({
      password: val
    })
  }

  login() {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`)

    this.setState({
      username : '',
      password : ''
    })
  }

  render() {
    return(
      <div>
        <h1>This is the Login Component</h1>
        <input 
        value={this.state.username} placeholder="Username" 
        onChange={(e)=>this.handleUsername(e.target.value)}
        />
        <input 
        value={this.state.password} placeholder="Password" 
        onChange={(e)=>this.handlePassword(e.target.value)}
        />
        <button 
        onClick={() => this.login()}> 
        Login 
        </button>
      </div>
    )
  }
}

export default Login;