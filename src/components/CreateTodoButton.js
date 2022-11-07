import './../css/CreateTodoButton.css';

function CreateTodoButton( {setOpenModal}) {

  const onClickButton = () => {
    setOpenModal(true);
  }

  return (
    <button
      className="create-todo-button"
      /* 
      En el onclcick debemos enviar una variable (funcion) 
      Lo envolvemos en una funcion para que no se ejecute automaticamente
      */
      onClick={ onClickButton }
    >
      + Crear Todo
    </button>)
}

export {CreateTodoButton};