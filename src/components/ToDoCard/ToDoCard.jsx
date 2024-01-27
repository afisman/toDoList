import React from 'react';
import './ToDoCard.css';

const ToDoCard = ({ toDo }) => {
    return (
        <div className='card'>
            <h2 className='card__title'>{toDo.description}</h2>
            <p className='card__priority'>{toDo.priority}</p>
            <p className='card__deadline'>{(new Date(toDo.deadline)).toDateString()}</p>
        </div>
    )
}

export default ToDoCard