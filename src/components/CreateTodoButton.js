import './../css/CreateTodoButton.css';

function CreateTodoButton() {

  const onClickCreateTodoButton = () => {
    alert('Abriendo un modal')
  }

  return (
    <button
      className="create-todo-button"
      /* 
      En el onclcick debemos enviar una variable (funcion) 
      Lo envolvemos en una funcion para que no se ejecute automaticamente
      */
      onClick={ onClickCreateTodoButton }
    >
      + Crear Todo
    </button>)
}

export {CreateTodoButton};