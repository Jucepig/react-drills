import React from 'react'

function NewTask(props) {
  const {handleChangeFn, addTaskFn, task} = props;
  return (
    <div>
      <input
      onChange={(e)=>{handleChangeFn(e.target.value)}}
      value={task}
      placeholder="Enter new task"
      />
      <button
      onClick={()=>{addTaskFn()}}
      > Add </button>
    </div>
  )
}

export default NewTask