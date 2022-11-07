import React from 'react';
import { useContext } from 'react';
import { TodoContext } from './../Context/TodoContext';
import './../css/TodoSearch.css';

function TodoSearch(){

    const { searchValue, setSearchValue } = useContext(TodoContext);
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }

    return(
        <React.Fragment>
            <input 
                className="findTodo" 
                placeholder="Buscar TODO"
                value = {searchValue}
                onChange={ onSearchValueChange }
            />
        </React.Fragment>
    )
}

export  {TodoSearch};
