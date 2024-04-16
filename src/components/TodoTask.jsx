
import React from 'react'

export const TodoTask = ({ todo , handleCheckbox, handleStatus, handleDelete, handleEdit}) => {
  return (
    <div className='list'>
      <ul>
          <li  >
            <div className="todo-item">

              <span className={`${todo.status ? "line_through" : ""} text`}> <input type="checkbox" onChange={() => handleCheckbox(todo.id)} /> {todo.value}</span>

              <button onClick={() => handleStatus(todo.id)} style={{ backgroundColor: todo.status ? 'green' : 'pink' }}>
                {todo.status ? "completed" : "pending"}
              </button>

              <p>
                {todo.priority}
              </p>

              <div>
                <button className='delete' onClick={() => handleDelete(todo.id)}>Delete</button>
                <button className='edit' onClick={() => handleEdit(todo.id, todo)}>Edit</button>
              </div>
              
            </div>
          </li>
       
      </ul>
    </div>
  )
}
