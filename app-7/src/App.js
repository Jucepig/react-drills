import React, {Component} from 'react';
import './App.css';
import List from './components/List'
import NewTask from './components/NewTask'

class App extends Component {
  constructor() {
    super()

    this.state = {
      taskArray : []
    }

    this.addTask = this.addTask.bind(this)
  }

  addTask(task) {
    this.setState({
      taskArray : [...this.state.taskArray, task]
    })
  }

  render() {
    return (
      <div className="App">
        <h1> My To-Do List: </h1>
        <NewTask add={this.addTask}/>
        <List tasks={this.state.taskArray}/>
      </div>
    )
  }  
}

export default App;
