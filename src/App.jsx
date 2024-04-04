import { useState } from 'react';
import './App.css';
import { Todo } from './pages/Todo';

function App() {
  
  return (
    <>
      <h1>To Do List</h1>

      <div className='container'>
        <Todo/>
      </div>
    </>
  );
}

export default App;