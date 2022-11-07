import React, { useState, useEffect } from 'react';
import { AppUI } from './AppUI'
import { TodoProvider } from './../Context/TodoContext'
import './App.css';



function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
