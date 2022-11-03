import React from 'react';
import './../css/TodoList.css';

function TodoList (props){
    return(
        <section>
            <ul className='lista-de-todos'>
                {props.children}
            </ul>
        </section>
    )
}

export { TodoList };
