import React from 'react';
import './../css/TodoSearch.css';

function TodoSearch(){
    return(
        <React.Fragment>
            <input className="findTodo" placeholder="Buscar TODO"/>
        </React.Fragment>
        
    )
}

export default TodoSearch;
