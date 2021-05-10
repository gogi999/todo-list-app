import React, { useEffect, useState } from 'react';
import './index.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getLocalStorage();
  }, []);

  useEffect(() => {
    saveLocalStorage();
  }, [todos]);

  const saveLocalStorage = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getLocalStorage = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos', JSON.stringify(todos)));
      setTodos(todoLocal);
    }
  }

  return (
    <div className="container">
      <header>
        <h2>Todo List</h2>
      </header>
      <TodoForm
        todos={todos}
        setTodos={setTodos}
        setTodo={setTodo}
        todo={todo}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
