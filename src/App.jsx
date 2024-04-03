import { useState } from 'react';
import './App.css';

function App() {
  const [todos , setTodos] = useState([]);
  const [inputValue , setInputValue] = useState(null);
  const [show, setShow] = useState(false)

  const handleChange = (e) =>
  {
    setInputValue({
     ...inputValue ,  value:e.target.value
    }); 
    console.log(inputValue)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(inputValue){

     if(!inputValue.id) {
    setTodos([...todos,{
      id:todos.length + 1,
      value:inputValue.value
    }])
  }
  else {
      setTodos(todos.map((item)=> {
    if(item.id === inputValue.id){
      return {
        id:item.id,
        value:inputValue.value
      }
    }
    return item
  }))
  }

  }
    setInputValue(null)
  }

  const handleDelete = (id) =>
  {
    setTodos(todos.filter((item)=> item.id !== id))
  }

const handleEdit = (id , todo) =>
{
  setInputValue(todo)
  setShow(true) 
}

const handleCancel = () => {
      setTodos(todos.map(todo => ({ ...todo})));
      setInputValue('');
      setShow(false)
    };

  return (
    <>
      <h1>To Do List</h1>

      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div id="new-task">
            <input type="text" id="task" placeholder="New task..." required value={inputValue?.value || ""} onChange={handleChange} />
            <button id="create" type='submit'>{inputValue?.id ? "Update" : "Add" || ""}</button>
          </div>
        </form>

        <div className='list'>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                <div className="todo-item">
                {/* <input type="checkbox"/>   */}
                  <span className='text'>{todo.value}</span>
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
      </div>
    </>
  );
}

export default App;