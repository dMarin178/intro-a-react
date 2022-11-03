import React from 'react';
import './App.css';
import CreateTodoButton from './components/CreateTodoButton';
import { TodoCounter } from './components/TodoCounter';
import TodoItem from './components/TodoItem';
import { TodoList } from './components/TodoList';
import TodoSearch from './components/TodoSearch';

const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar Curso de intro a React ', completed: false },
  { text: 'Aspirar la casa', completed: true },
]

function App() {

  return (
    <React.Fragment>
      <header>
        <TodoCounter />
      </header>
      <fieldset>
        <TodoSearch />
        <TodoList>
          {todos.map(todo => (
            /* 
            Es obligatorio enviar una "key" 
            para cada todo 
            */
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed = {todo.completed}
            />
          ))}
        </TodoList>
        <CreateTodoButton />
      </fieldset>
    </React.Fragment>

  );
}

export default App;
