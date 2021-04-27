import React, {Component} from 'react';
import './App.css';
import List from './components/List'
import NewTask from './components/NewTask'


class App extends Component {
  constructor() {
    super()

    this.state = { 
      taskArray : [],
      task : ''
    }
  }

  addTask = () => {
    const {taskArray, task} = this.state
    this.setState({
      taskArray : [task, ...taskArray],
      task : ''
    })
  }

  handleChange = (val) => {
    this.setState({
      task : val
    })
  }

  render() {
    return(
      <div className="App">
        <h1> My To-Do List: </h1>
        <NewTask 
        handleChangeFn={this.handleChange} 
        addTaskFn={this.addTask} 
        task={this.state.task}
        />
        <List 
          taskArray={this.state.taskArray}
        />
      </div>
    )
  }
}

export default App;
