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

    console.log(toDoList)

    return (
        <>
            <div>ToDoList</div>
            <button onClick={handleClick}>Add</button>
            <div className='list__headers'>
                <p className='list__headers__text'>Task</p>
                <p className='list__headers__text'>Priority</p>
                <p className='list__headers__text'>Deadline</p>
            </div>
            <div className='toDo__list'>
                {toDoList.map((el, i) => (
                    <ToDoCard toDo={el} key={i} />
                ))}
            </div>
        </>
    )
}

export default ToDoList