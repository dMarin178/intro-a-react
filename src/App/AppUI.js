import React from 'react';
import { TodoCounter } from '../components/TodoCounter';
import { TodoItem } from '../components/TodoItem';
import { TodoList } from '../components/TodoList';
import { TodoSearch } from '../components/TodoSearch';
import { CreateTodoButton } from '../components/CreateTodoButton';

function AppUI({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
    
    return (
        <React.Fragment>
            <header>
                <TodoCounter
                    total={totalTodos}
                    completed={completedTodos}
                />
            </header>
            <fieldset>
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
                <TodoList>
                    { error && <p> Error </p>}
                    { loading && <p> Cargando...</p>}
                    { (!loading && !searchedTodos.length) && <>!Crea tu primer todo</>}
                    {
                        searchedTodos.map(todo => (
                            /* 
                            Es obligatorio enviar una "key" 
                            para cada todo 
                            */
                            <TodoItem
                                key={todo.text}
                                text={todo.text}
                                completed={todo.completed}
                                onComplete={() => completeTodo(todo.text)}
                                onDelete={() => deleteTodo(todo.text)}
                            />
                        ))
                    }
                </TodoList>
                <CreateTodoButton />
            </fieldset>
        </React.Fragment>
    )
}

export { AppUI };