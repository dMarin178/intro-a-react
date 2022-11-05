import React ,{createContext} from 'react';

const TodoContext = createContext();

function TodoProvider(props) {
    return (
        <TodoContext.Provider>
            {props.children}
        </TodoContext.Provider>
    );
}

<TodoContext.Consumer></TodoContext.Consumer>