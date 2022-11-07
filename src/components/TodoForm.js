import React ,{useState, useContext} from 'react';
import {TodoContext} from './../Context/TodoContext';


function TodoForm() {

    const [newTodoValue, setNewTodoValue] = useState('');

    const {
        addTodo,
        setOpenModal
    } = useContext(TodoContext);

    const onCancel= () => {
        setOpenModal(false);
    }

    const onSubmit= (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <React.Fragment>
            <form onSubmit={onSubmit}>
            <h3> Agregar Todo</h3>
            <textarea 
                type="text" 
                placeholder="Todo"
                value={newTodoValue}
                onChange={onChange}
            />
            <button
                type="button"
                className="btn btn-cancel"
                onClick={onCancel}
            >
                Cancelar
            </button>
            <button
                type="submit"
                className="btn btn-add"
            >
                Agregar
            </button>
            </form>
        </React.Fragment>
    )
}

export {TodoForm}; 