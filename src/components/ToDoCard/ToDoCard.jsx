import React from 'react';
import './ToDoCard.css';
import { removeToDo } from '../../features/toDoSlice/toDoSlice';
import { useDispatch } from 'react-redux';

const ToDoCard = ({ toDo }) => {
    const dispatch = useDispatch()

    const handleRemove = () => {
        dispatch(removeToDo(toDo.id))
    }
    return (
        <div className='card'>
            <p className='card__text'>{toDo.description}</p>
            <p className='card__text'>{toDo.priority}</p>
            <p className='card__text'>{(new Date(toDo.deadline)).toDateString()}</p>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}

export default ToDoCard