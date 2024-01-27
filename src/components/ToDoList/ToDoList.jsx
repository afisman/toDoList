import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getToDoList } from '../../features/toDoSlice/toDoSlice';
import ToDoCard from '../ToDoCard/ToDoCard';
import './ToDoList.css';


const ToDoList = () => {
    const navigate = useNavigate();
    const toDoList = useSelector(getToDoList)

    const handleClick = () => {
        navigate('/add')
    }

    return (
        <>
            <div>ToDoList</div>
            <button onClick={handleClick}>Add</button>
            <div className='toDo__list'>
                {toDoList.map((el, i) => (
                    <ToDoCard toDo={el} key={i} />
                ))}
            </div>
        </>
    )
}

export default ToDoList