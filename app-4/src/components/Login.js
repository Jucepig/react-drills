import React, {Component} from 'react'

class Login extends Component { 
  constructor() {
    super()

    this.state = {
      username : '',
      password : ''
    }
  }

  handleChange = (e) => {
    const {name} = e.target
    const val = e.target.value
    this.setState({
      [name] : val
    })
  }

  submitLogin = () => {
    const {username, password} = this.state
    alert(`Success! You've entered username: ${username} and password: ${password}`)
    this.setState({
      username : '',
      password : ''
    })
  }
  
  render() {
    const {username, password} = this.state
    return(
      <div>
        <h1>This is the Login Component</h1>
        <input 
          name="username" 
          value={username} 
          onChange={(e) =>this.handleChange(e)} 
        />
        <input 
          name="password" 
          value={password} 
          onChange={(e) =>this.handleChange(e)} 
        />
        <button onClick={this.submitLogin}> Login </button>
      </div>
    )
  }
}

export default Login