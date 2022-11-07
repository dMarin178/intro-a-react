import React from 'react';
import ReactDOM from 'react-dom';
import {TodoForm} from './../components/TodoForm'
import "./../css/Modal.css";


function Modal() {

    return ReactDOM.createPortal(
        <div className="modal-background">
            <div className="mi-modal">
                <TodoForm/>
                
            </div>
        </div>
        ,
        document.getElementById('modal')
    );
}

export { Modal };