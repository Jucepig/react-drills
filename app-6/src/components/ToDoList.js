import React from 'react'

function ToDoList (props) {
    return (
      <div>
        <div>
          {props.taskArray.map((el)=>{
            return(
              <h3>{el}</h3>
            )
          })}
        </div>
      </div>
    )
  }

export default ToDoList;