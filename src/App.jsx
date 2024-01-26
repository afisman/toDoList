import { Route, Routes } from 'react-router-dom';
import './App.css';
import ToDoList from './components/ToDoList/ToDoList';
import ToDoForm from './components/ToDoForm/ToDoForm';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ToDoList />} />
        <Route path='/add' element={<ToDoForm />} />
      </Routes>
    </>
  );
}

export default App;
