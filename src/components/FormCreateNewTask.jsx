import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { openFormCreateTask } from '../slice/createBoardSlice';
import { createTask } from '../slice/createBoardSlice';

import css from "./Board/Board.module.css"
import { useTranslation } from 'react-i18next';

const FormCreateNewTask = () => {

  const showForm = useSelector(state => state.board.showFormCreateTask)


  const { t } = useTranslation();

  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const submitTodo = e => {
    e.preventDefault();
    dispatch(createTask(todo));
    setTodo("");
  };

  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.body.style.overflow = "initial"
    }
  }, [showForm])

  return (
    <form className={css.form__createTask} onClick={() => dispatch(openFormCreateTask())}>
      <label className={css.form__label} onClick={e => e.stopPropagation()}>
        <h4 className={css.form__title}>{t("Create a new Task")}</h4>
        <input className={css.form__input} value={todo} onChange={e => setTodo(e.target.value)} type="text" placeholder={t("input to do")} />
        <button type='submit' onClick={e => submitTodo(e)}>{t("submit")}</button>
      </label>
    </form >
  );
};

export default FormCreateNewTask;