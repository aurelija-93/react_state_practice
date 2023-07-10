import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { name: 'Buy shopping', priority: 'high' },
    { name: 'Clean bathroom', priority: 'low' },
    { name: "Car's MOT", priority: 'high' }
  ]);

  const [newTodo, setNewTodo] = useState('');

  const [newTodoPriority, setNewTodoPriority] = useState('high');

  const todoNodes = todos.map(function(todo, index) {
    return (
      <li key={index} className={todo.priority}>
        <span>
          {todo.name}
        </span>
      </li>
    )
  })

  const handleFormSubmit = function(evt) {
    evt.preventDefault();
    const todo = {
      name: newTodo,
      priority: newTodoPriority
    };
    const copyTodos = [...todos, todo];
    setTodos(copyTodos);
    setNewTodo('');
    setNewTodoPriority('high');
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
        <input type='text' value={newTodo} onChange={handleTodoInput}/>
        <label htmlFor='high'>High</label>
        <input id='high' type='radio' value='high' name='priority' checked onClick={() => setNewTodoPriority('high')}/>
        <label htmlFor='low'>Low</label>
        <input id='low' type='radio' value='low' name='priority' onClick={() => setNewTodoPriority('low')}/>
        <input type='submit' value='Save Item' />
      </form>
      <ul>
        {todoNodes}
      </ul>
    </div>
  );
}

export default App;
