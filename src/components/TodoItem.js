import './../css/TodoItem.css';

/* 
Otra forma de usar estilos 
es importando el archivo .css 
*/

function TodoItem( {key, text, completed, onComplete, onDelete}) {

    return (
        <li className="TodoItem">
            {/* Si se recive algun props.completed, el className cambia a Icon-check-active */}
            <span
                className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
                onClick={onComplete}
            >
                √
            </span>
        
        {/* Si se recibe un props.completed entonces el classname se cambia a completed */}
            <p
                className={`TodoItem-p ${completed && 'TodoItem-p--completed'}`}
            >
                {text}
            </p>

            <span 
                className="Icon Icon-delete"
                onClick = {onDelete}
            >
            X
            </span>
        </li>
    )
}

export  {TodoItem};