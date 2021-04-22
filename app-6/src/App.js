import React, {Component} from 'react';
import './App.css';
import ToDoList from './components/ToDoList'

class App extends Component {
  constructor() {
    super()

    this.state = {
      inputVal : '', 
      taskArray: []
    }

    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(val) {
    this.setState({
      inputVal : val
    })
  }

  addTask() {
    this.setState({
      taskArray : [...this.state.taskArray, this.state.inputVal],
      inputVal : ''
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input 
        value={this.state.inputVal} 
        placeholder={"Enter new task"} 
        onChange={(e)=>{this.handleChange(e.target.value)}}
        />
        <button onClick={()=>this.addTask()}> Add </button>
        <ToDoList taskArray={this.state.taskArray}/>
      </div>
    )
  }
}

export default App;
