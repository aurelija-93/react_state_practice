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

  const handleFormSubmit = function(evt) {
    evt.preventDefault();
    const todo = newTodo;
    const copyTodos = [...todos, todo];
    setTodos(copyTodos);
    setNewTodo('');
  }

  const handleTodoInput = function(evt) {
    const value = evt.target.value;
    setNewTodo(value);
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <hr></hr>
      <form onSubmit={handleFormSubmit}>
        <input id='new-todo' type='text' value={newTodo} onChange={handleTodoInput}/>
        <input type='submit' value='Save Item' />
      </form>
      <ul>
        {todoNodes}
      </ul>
    </div>
  );
}

export default App;
