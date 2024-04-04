import { useState , useEffect } from "react";
import { TodoForm } from "../components/TodoForm"
import { TodoList } from "../components/TodoList";


export const Todo = () =>
{

    const [todos , setTodos] = useState ([]);
    const [inputValue , setInputValue] = useState(null);
    const [show, setShow] = useState(false)
    const [priority, setPriority] = useState("Low")
    console.log(priority);
    
    

  
// console.log(search ,"serach");
   console.log("the value of search",todos)
 

  const handleChange = (e) =>
  {
    setInputValue({
     ...inputValue ,  value:e.target.value
    }); 
    setShow(false)

    // console.log("The Input Value is :",inputValue)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(inputValue){
     if(!inputValue.id) {
    setTodos([...todos,{
      id:todos.length + 1,
      value:inputValue.value,
      status : false,
      priority:priority
      // isChecked : false
    }])
  }

 

  else {
      setTodos(todos.map((item)=> {
    if(item.id === inputValue.id){
      return {
        id:item.id,
        value:inputValue.value,
        // priority:priority(value)
      }
    }
    return item
  }))
  }

  }
    setInputValue(null)
  }
  
  
    return(
        <>
        <TodoForm   todos={todos} setTodos={setTodos} handleSubmit={handleSubmit} handleChange={handleChange} inputValue={inputValue} show={show} setInputValue={setInputValue} setShow={()=>setShow(false)} setPriority={setPriority} priority={priority} />
        <TodoList todos={todos} show={show} setTodos={setTodos} setInputValue={setInputValue} setShow={setShow} priority={priority} />
        </>
    )
}