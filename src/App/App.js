import React, { useState, useEffect } from 'react';
import { AppUI } from './AppUI'
import './App.css';

//Custom React Hook
function useLocalStorage(itemName, initialValue) {
  //Use State para guardar nuestros estados
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue);

  /* Use Effect que simula una peticion al servidor */
  useEffect(() => {
    console.log('Ejecutando useEffect');
    setTimeout(() => {
      try {
        // Variales locales para el navegador
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        //Si no hay archivos locales guardados en el navegador
        //Creamos un nuevo array vacio
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else {
          // por el contratio nuestros parsedItem toma el valor de 
          //de los archivos guardados en el navegador
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }

    }, 2000);
  }, []);

  //Guardamos los cambios en el Local Storage
  const saveItem = (newItem) => {
    try{
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    } catch (error){
      setError(error);
    }
  };

  //Devolvemos un useState(item) y loading como un objeto {}
  //En el caso de enviar solo un useState(item) se envia un array []
  return {
    item,
    saveItem,
    loading,
    error,
  };
}

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    })
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
    <AppUI
      error={error}    
      loading={loading}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
