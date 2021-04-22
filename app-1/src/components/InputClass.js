import React, {Component} from 'react'

class InputClass extends Component {
  constructor() {
    super()

    this.state ={
      inputVal : ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({
      inputVal : value
    })
  }

  render() {
    return (
      <div>
        <h1> This is a class component</h1>
        <input onChange={(e) => this.handleChange(e.target.value)}/>
        <h4>{this.state.inputVal}</h4>
      </div>
    )
  }
}

export default InputClass;