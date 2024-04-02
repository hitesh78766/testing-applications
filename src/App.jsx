import { useState } from 'react'
import './App.css'




function App() {

  const [todos , setTodos] = useState([]);
  const [inputValue , setInputValue] = useState("");

  const handleChange = (e) =>
  {
    setInputValue(e.target.value); 
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    setTodos([...todos,inputValue])
    setInputValue('')
  }

  const handleDelete = (index) =>
  {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

const handleEdit = (index , todo) =>
{
  setInputValue(todo)

}
  return (
    <>
      <h1>To Do List</h1>

      <div className='container'>
        <form onSubmit={handleSubmit}>
        <div id="new-task">
            <input type="text" id="task" placeholder="New task..." required  value={inputValue} onChange={handleChange}/>
            <button id="create" type='submit' >Add</button>


        </div>

        </form>
            <ul>
               {todos.map((todo , index) => (
                <li key={index}>{todo}
                  <button className='delete' onClick={() =>handleDelete(index)}>Delete</button>
                  <button className='edit' onClick={() => handleEdit(index , todo)}>Edit</button>
               </li>
               ))}
            </ul>
      </div>

    </>
  )
}

export default App
