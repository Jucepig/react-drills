import React, {Component} from 'react';
import './App.css';
import ToDoList from './components/ToDoList'

class App extends Component {
  constructor() {
    super()

    this.state = {
      taskArray : [],
      taskInput : ''
    }
  }
  
  handleChange = (val) => {
    this.setState({
      taskInput : val
    })
  }

  addTask() {
    const {taskInput, taskArray} = this.state
    this.setState({
      taskArray : [...taskArray, taskInput],
      taskInput : ''
    })
  }



  render() {
    return (
      <div className="App">
        <h1> My To-Do List: </h1>
        <input 
        value={this.state.taskInput}
        placeholder={"Which task should we add?"}
        onChange={(e) => {this.handleChange(e.target.value)}} 
        />
        <button 
          onClick={() => this.addTask()}> Add Task 
        </button>
        <ToDoList 
          taskArray={this.state.taskArray}
        />
      </div>
    )
  }
}

export default App;
