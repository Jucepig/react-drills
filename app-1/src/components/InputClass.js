import React, {Component} from 'react'

class InputClass extends Component {
  constructor() {
    super()

    this.state = {
      inputVal : ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(val) {
    this.setState({
      inputVal : val
    })
  }

  render() {
    return(
      <div>
        <input onChange={(e) => {this.handleChange(e.target.value)}}/>
        <h3>{this.state.inputVal}</h3>
      </div>
    )
  }
}

export default InputClass