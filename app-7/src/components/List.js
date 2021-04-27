import React from 'react'
import Todo from './Todo'

function List(props) {
  return(
    <div>
      {props.taskArray.map((task, index)=> {
        return (
          <Todo 
          key={index} 
          task={task} 
          />
        )
      })}
    </div>
  )
}

export default List