import React from 'react'

const Todos = ({todos,removeTodo, completeTodo}) => {
  return (
    <div className='todo' style={{textDecoration: todos.isCompleted ? "line-through":""}}>
    <div className='content'>
    <p>({todos.text})</p>
    <p className='category'>{todos.category}</p>
    </div>
    <div>
      <button className='complete' onClick={() => completeTodo(todos.id)}>
        Completar</button> 
      <button className="remove" onClick={() => removeTodo(todos.id)}>
          x
        </button>
    </div>
    </div>   
  )
}

export default Todos