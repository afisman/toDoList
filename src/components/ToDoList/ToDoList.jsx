import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getToDoList } from '../../features/toDoSlice/toDoSlice';


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
            <div>
                {toDoList.map((el, i) => (
                    <div key={i}>
                        <h2>{el.description}</h2>
                        <p>{el.priority}</p>
                        <p>{(new Date(el.deadline)).toDateString()}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ToDoList