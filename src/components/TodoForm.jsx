
// import React, { useState } from "react";
// import { TodoLists } from "./TodoLists";
// import { TodoTask } from "./TodoTask";


// export const TodoForm = ({
//   handleSubmit,
//   inputValue,
//   handleChange,
//   setShow,
//   show,
//   setTodos,
//   setInputValue,
//   handleEdit,
//   handleDelete,
//   todos,
//   setPriority,
//   priority,
// }) => {
//   const [activeTab, setActiveTab] = useState("tab0");

//   // This Functon is making for the cancel the editing text..
//   const handleCancel = () => {
//     setShow();
//     setTodos(todos.map((todo) => ({ ...todo })));
//     setInputValue("");
//     console.log("the show is", show);
//   };


//   //This function is making for the changing the priority..
//   const handlePriorityChange = (value) => {
//     setPriority(value);
//   };

//   // This function is making for the show the tab..
//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };
 

 

//   return (
//     <>
//       <div id="new-task">
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             id="task"
//             required
//             value={inputValue?.value || ""}
//             onChange={handleChange}
//           />
//           <select onChange={(e) => handlePriorityChange(e.target.value)}>
//             <option value="Low">Low</option>
//             <option value="Medium">Medium</option>
//             <option value="High">High</option>
//           </select>
//           <button id="create" type="submit" className="add-btn">
//             {inputValue?.id ? "Update" : "Add" || ""}
//           </button>
//         </form>
//         {show && (
//           <button className="cancel" onClick={handleCancel}>
//             Cancel
//           </button>
//         )}
//       </div>

//       <div className="tabs">

//         <button
//           className={`tab ${activeTab === "tab0" ? "active" : ""}`}
//           onClick={() => handleTabClick("tab0")}
//         >
//           All
//         </button>

//         <button
//           className={`tab ${activeTab === "tab1" ? "active" : ""}`}
//           onClick={() => handleTabClick("tab1")}
//         >
//           Complete
//         </button>

//         <button
//           className={`tab ${activeTab === "tab2" ? "active" : ""}`}
//           onClick={() => handleTabClick("tab2")}
//         >
//           Pending
//         </button>
//       </div>

//       <div className="tab-content">

//         {/* {activeTab === "tab0" && <p> {todos.map((todo)=>{return <TodoTask todo={todo} />})}</p>} */}
//         {activeTab === "tab0" && <> {<TodoLists todos={todos} setTodos={setTodos} setInputValue={setInputValue} show={show} handleEdit={handleEdit} setShow={setShow}/>}</>}
//         {activeTab === "tab1" && <> {todos.filter((todo) => todo.status !== false).map((todo,) => (<TodoTask todo={todo} handleEdit={handleEdit} handleDelete={handleDelete}/>))}</>}
//         {activeTab === "tab2" && <> {todos.filter((todo) => todo.status == false).map((todo) => (<TodoTask todo={todo} handleEdit={handleEdit}  handleDelete={handleDelete}/>))}</>}
//       </div>
//     </>
//   );
// };

import React, { useState } from "react";
import { TodoLists } from "./TodoLists";
import { TodoTask } from "./TodoTask";

export const TodoForm = ({
  handleSubmitForm,
  inputValue,
  handleChange,
  setShow,
  show,
  setTodos,
  setInputValue,
  handleEdit,
  handleDelete,
  todos,
  // setPriority,
  // priority,
}) => {
  const [activeTab, setActiveTab] = useState("tab0");

  const handleCancel = () => {
    setShow(false); // Hide the form
    setTodos(todos.map((todo) => ({ ...todo })));
    setInputValue({ value: "", priority: "Low" }); // Reset input fields
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      if (!inputValue.id) {
        setTodos([
          ...todos,
          {
            id: todos.length + 1,
            value: inputValue.value,
            status: false,
            priority: inputValue.priority
          }
        ]);
      } else {
        setTodos(
          todos.map((item) => {
            if (item.id === inputValue.id) {
              return {
                ...item,
                value: inputValue.value,
                priority: inputValue.priority
              };
            }
            return item;
          })
        );
      }
      setInputValue({ value: "", priority: "Low" }); // Clear input fields
      setShow(false); // Hide the form
    }
  };

 

  const handlePriorityChange = (value) =>
  {
    setInputValue({ ...inputValue, priority: value });
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div id="new-task">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="task"
            required
            value={inputValue?.value || ""}
            onChange={handleChange}
          />
          <select
            value={inputValue} // Set the value of select to the priority state
            onChange={(e) => handlePriorityChange(e.target.value)}
          >            
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          <button id="create" type="submit" className="add-btn">
            {inputValue?.id ? "Update" : "Add"}
          </button>

        </form>
        {show && (
          <button className="cancel" onClick={handleCancel}>
            Cancel
          </button>
        )}
      </div>

      <div className="tabs">
        <button
          className={`tab ${activeTab === "tab0" ? "active" : ""}`}
          onClick={() => handleTabClick("tab0")}
        >
          All
        </button>
        <button
          className={`tab ${activeTab === "tab1" ? "active" : ""}`}
          onClick={() => handleTabClick("tab1")}
        >
          Complete
        </button>
        <button
          className={`tab ${activeTab === "tab2" ? "active" : ""}`}
          onClick={() => handleTabClick("tab2")}
        >
          Pending
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "tab0" && (
          <TodoLists
            todos={todos}
            setTodos={setTodos}
            setInputValue={setInputValue}
            show={show}
            handleEdit={handleEdit}
            setShow={setShow}
          />
        )}
        {activeTab === "tab1" && (
          <>
            {todos
              .filter((todo) => todo.status !== false)
              .map((todo) => (
                <TodoTask
                  key={todo.id}
                  todo={todo}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                />
              ))}
          </>
        )}
        {activeTab === "tab2" && (
          <>
            {todos
              .filter((todo) => todo.status === false)
              .map((todo) => (
                <TodoTask
                  key={todo.id}
                  todo={todo}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                />
              ))}
          </>
        )}
      </div>
    </>
  );
};
