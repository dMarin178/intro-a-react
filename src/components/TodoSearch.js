import React from 'react';
import './../css/TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue}){

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
