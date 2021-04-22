import React, {Component} from 'react'

class NewTask extends Component {
  constructor(){
    super()

    this.state = {
      inputVal : ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    }

  handleChange(val) {
    this.setState({
      inputVal : val
    })
  }

  handleAdd() {
    this.props.add(this.state.inputVal)
    this.setState({
      inputVal : ''
    })
  }

  render() {
    return (
      <div>
        <input 
        value={this.state.inputVal}
        placeholder={"Add another task"}
        onChange={(e)=>{this.handleChange(e.target.value)}}
        />
        <button onClick={this.handleAdd}> Add Task </button>
      </div>
    )
  }
}

export default NewTask;