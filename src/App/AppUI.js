import React from 'react';
import { useContext } from 'react';
import { TodoContext } from './../Context/TodoContext'
import { TodoCounter } from '../components/TodoCounter';
import { TodoItem } from '../components/TodoItem';
import { TodoList } from '../components/TodoList';
import { TodoSearch } from '../components/TodoSearch';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { Modal } from '../components/Modal';

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = useContext(TodoContext);

    return (
        <React.Fragment>
            <header>
                <TodoCounter />
            </header>
            <fieldset>
                <TodoSearch />
                <TodoList>
                    {error && <p> Error </p>}
                    {loading && <p> Cargando...</p>}
                    {(!loading && !searchedTodos.length) && <>!Crea tu primer todo</>}
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

                { !!openModal && (
                    <Modal>
                    </Modal>
                )}

                <CreateTodoButton 
                    setOpenModal={setOpenModal}
                />
            </fieldset>
        </React.Fragment>
    )
}

export { AppUI };