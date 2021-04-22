import React from 'react'
import Todo from './Todo'

function List (props) {
  console.log('List prop :'+ props)
  return(
    <div>
      {props.tasks.map((el, i)=>{
        return <Todo key={i} task={el}/>
      })}
    </div>
  )
}

export default List