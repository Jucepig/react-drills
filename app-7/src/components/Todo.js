import React from 'react'

function Todo(props) {
  console.log(props)
  return (
    <h4>{props.task}</h4>
  )
}

export default Todo;