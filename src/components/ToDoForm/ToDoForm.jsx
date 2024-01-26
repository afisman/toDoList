import React, { useState } from 'react';
import { addToDo, getToDoList } from '../../features/toDoSlice/toDoSlice';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';



const ToDoForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        description: '',
        priority: 1,
        deadline: (new Date()).getTime(),
    })



    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(typeof (formData.deadline))

        dispatch(addToDo(formData));

        navigate('/')

    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Description</label>
            <textarea
                value={formData.description || ''}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                cols='20'
                rows='10'
            />
            <select
                name="priority"
                id="priority"
                onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>

            </select>

            <DatePicker selected={new Date(formData.deadline)} onChange={(date) => setFormData({ ...formData, deadline: date.getTime() })} />

            <input type="submit" />

        </form>
    )
}

export default ToDoForm