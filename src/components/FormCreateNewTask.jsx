import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { openFormCreateTask } from '../slice/createBoardSlice';
import { createTask } from '../slice/createBoardSlice';

import css from "./Board/Board.module.css"

const FormCreateNewTask = () => {

  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const submitTodo = e => {
    e.preventDefault();
    dispatch(createTask(todo));
    setTodo("");
  };

  return (
    <form className={css.form__createTask} onClick={() => dispatch(openFormCreateTask())}>
      <label className={css.form__label} onClick={e => e.stopPropagation()}>
        <h4 className={css.form__title}>Create a new Task</h4>
        <input className={css.form__input} value={todo} onChange={e => setTodo(e.target.value)} type="text" placeholder='input to do' />
        <button type='submit' onClick={e => submitTodo(e)}>submit</button>
      </label>
    </form >
  );
};

export default FormCreateNewTask;