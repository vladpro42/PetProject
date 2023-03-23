import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createTask } from '../slice/createBoardSlice';

const FormCreateNewTask = () => {

  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const submitTodo = e => {
    e.preventDefault();
    dispatch(createTask(todo));
    setTodo("");
  };

  return (
    <form style={{
      marginTop: "75px",
      height: "300px",
      background: "gray"
    }}>
      <label>
        <h4>Create a new Task</h4>
        <input value={todo} onChange={e => setTodo(e.target.value)} type="text" placeholder='input to do' />
      </label>
      <button type='submit' onClick={e => submitTodo(e)}>submit</button>
    </form>
  );
};

export default FormCreateNewTask;