
import { useEffect } from "react";
export const TodoLists = ({todos,setTodos,setInputValue,setShow}) =>
{
  // console.log(todos ,"here")

 
  const handleStatus  = (id) => {
      
    setTodos(todos.map(todo =>{
      if(todo.id == id)
      {
       
        return {...todo,status : !todo.status}
      }
      else
      { 
        return todo
      }
    }))

  }

  const handleCheckbox = (id) =>{
    
    setTodos(todos.map(todo =>
      {     
      if(todo.id==id)
      {
        return({ ...todo, status:  !todo.isChecked})
      }
      else{
        return todo
      }
      }
    ));
  }
  // console.log(todos)


  const handleDelete = (id) =>
  {
    const newTodos = todos.filter((item)=> item.id !== id);
    setTodos(newTodos)
  }

const handleEdit = (id , todo) =>
{
  setInputValue(todo)
  setShow(true) 
}

todos.sort((a, b) =>{
  const sortingOrder = {High:1, Medium:2, Low:3}
  return sortingOrder[a.priority] - sortingOrder[b.priority];
} );


    return<>
    {todos.length ? 

<div className='list'>
  <ul>
  {todos.map((todo, index) => (
    <li key={index}>
      <div className="todo-item">     
             
        <span className={`${todo.status ? "line_through" : ""} text`}> <input type="checkbox" onChange={() => handleCheckbox(todo.id)}/> {todo.value}</span>

        <button onClick={() => handleStatus(todo.id)} style={{ backgroundColor: todo.status ? 'green' : 'pink' }}>
                  {todo.status ? "completed" : "pending"  } 
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
  ))}
</ul>
</div>
:
<div className="" style={{marginTop:"20px", backgroundColor:"white", padding:"10px 10px ", color:"red"}}>No Data Available</div>
 }

    </>
}
