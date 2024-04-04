export const TodoForm = ({handleSubmit,inputValue,handleChange, setShow, show,setTodos,setInputValue,todos,setPriority,priority}) =>

{
  const handleCancel = () => {
    setShow()
    setTodos(todos.map(todo => ({ ...todo})));
    setInputValue('');
    console.log("the show is",show)
  };

  const handlePriorityChange = (value) => {
    setPriority(value );
  }

    return<>
<div id="new-task">
    <form onSubmit={handleSubmit}>
          
            <input type="text" id="task" required value={inputValue?.value || ""} onChange={handleChange} />
       
        <select onChange={(e)=>handlePriorityChange(e.target.value)}>           
                 
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

            <button id="create" type='submit'>{inputValue?.id ? "Update" : "Add" || ""}</button>
            
         
        </form>
        {show && (<button className='cancel' onClick={handleCancel}>Cancel</button>)}
        </div>
    </>
}