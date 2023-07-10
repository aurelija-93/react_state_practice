import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    'Buy shopping',
    'Clean bathroom',
    "Car's MOT"
  ]);

  const [newTodo, setNewTodo] = useState('');

  const todoNodes = todos.map(function(todo, index) {
    return (
      <li key={index}>
        <span>
          {todo}
        </span>
      </li>
    )
  })

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <hr></hr>
      <ul>
        {todoNodes}
      </ul>
      <label htmlFor='new-todo'>Add task:</label>
      <input id='new-todo' type='text' value={newTodo} />
      <input type='submit' value='Add task' />
    </div>
  );
}

export default App;
