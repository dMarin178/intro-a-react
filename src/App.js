import React from 'react';
import './App.css';
import CreateTodoButton from './components/CreateTodoButton';
import TodoCounter from './components/TodoCounter';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
import TodoSearch from './components/TodoSearch';

function App() {
  const todos = [
    { text: 'Cortar cebolla', completed: false},
    { text: 'Tomar Curso de intro a React ', completed: false},
    { text: 'Aspirar la casa', completed: true},
  ]
  return (
    <React.Fragment>
      <h2> Has completado 2 de 3 TODOs</h2>
      <TodoCounter />
      <TodoSearch />
      <input placeholder="Cebolla"/>
      <TodoList>
        {todos.map( todo => {
          {<TodoItem/>}
        })}
        
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
