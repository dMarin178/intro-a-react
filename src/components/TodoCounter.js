import {useContext} from 'react';
import {TodoContext} from './../Context/TodoContext.js';

function TodoCounter() {

    const { totalTodos, completedTodos} = useContext(TodoContext);
    /* 
    Los estilos en react se entregan como un objeto
    a la etiqueta HTML.

    Ademas se intercambia la nomenclatura usando 
    separacion con un guion a usar camelCase 
    ej: background-color --> backgroundColor
    */

    const estilos = {
        fontFamily:'monospace',
        textAlign: 'center',
    }

    return (
        <h1 style={estilos}> Has completado {completedTodos} de {totalTodos} TODOs</h1>

        /* 
        OJO
        al momento de entregar el objeto 
        de estilos de forma lineal, se deben envolver
        en doble llaves.
        Ejemplo: 
            <h2> style={{ backgroundColor: 'black'}} 
        */
    )
}

export { TodoCounter };