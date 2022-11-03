import './../css/TodoItem.css';

/* 
Otra forma de usar estilos 
es importando el archivo .css 
*/

function TodoItem(props) {
    return (
        <li className="TodoItem">
            {/* Si se recive algun props.completed, el className cambia a Icon-check-active */}
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
                √
            </span>
            {/* Si se recibe un props.completed entonces el classname se cambia a completed */}
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>{props.text}</p>
            <span className="Icon Icon-delete">
                X
            </span>
        </li>
    )
}

export default TodoItem;