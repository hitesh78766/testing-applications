import { useState } from "react";
import { TodoForm } from "../components/TodoForm"
import { TodoList } from "../components/TodoList";


export const Todo = () =>
{

    const [todos , setTodos] = useState ([]);
  const [inputValue , setInputValue] = useState(null);
  const [show, setShow] = useState(false)

  const handleChange = (e) =>
  {
    setInputValue({
     ...inputValue ,  value:e.target.value
    }); 
    setShow(false)
    console.log("The Input Value is :",inputValue)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(inputValue){
     if(!inputValue.id) {
    setTodos([...todos,{
      id:todos.length + 1,
      value:inputValue.value,
      isChecked : false
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

    const handleCheckbox = (id) =>{
    
      setTodos(todos.map(todo =>
        {     
        if(todo.id==id)
        {
          return({ ...todo, isChecked:  !todo.isChecked})
        }
        else{
          return todo
        }
        }
      ));
    
    }
    console.log(todos)


    return(
        <>
        <TodoForm handleSubmit={handleSubmit} handleChange={handleChange} inputValue={inputValue}/>
        <TodoList handleCheckbox={handleCheckbox} handleDelete={handleDelete} handleEdit={handleEdit} handleCancel={handleCancel} todos={todos} show={show}/>
        </>
    )
}