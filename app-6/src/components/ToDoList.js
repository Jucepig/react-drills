import React from 'react'

function ToDoList(props) {
  return(
    <div>
      {props.taskArray.map((task) => {
        return(
          <h3>{task}</h3>
        )
      })}
    </div>
  )
}

export default ToDoList