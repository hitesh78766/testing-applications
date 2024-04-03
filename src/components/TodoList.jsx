export const TodoList = ({handleCheckbox,handleDelete,handleEdit,handleCancel,todos,show}) =>
{
    return<>
    {todos.length ? 

<div className='list'>
<ul>
  {todos.map((todo, index) => (
    <li key={index}>
      <div className="todo-item">     
      <input type="checkbox" onChange={() => handleCheckbox(todo.id)}/>        
        <span className={`${todo.isChecked ? "line_through" : ""} text`}>  {todo.value}</span>
        <div>
          <button className='delete' onClick={() => handleDelete(todo.id)}>Delete</button>
          <button className='edit' onClick={() => handleEdit(todo.id, todo)}>Edit</button>
          {show && (<button className='cancel' onClick={handleCancel}>Cancel</button>)}
        </div>
      </div>
    </li>
  ))}
</ul>
</div>
:
"no data available" }
    </>
}

