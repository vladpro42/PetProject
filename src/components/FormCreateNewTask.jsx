import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { openFormCreateTask, setStateFromDataBase } from '../slice/createBoardSlice';

import css from "./Board/Board.module.css"
import { useTranslation } from 'react-i18next';
import { httpURL, tasksUrl } from '../config';
import { getTasks } from '../utils/fetchTask';

const FormCreateNewTask = () => {

  const state = useSelector(state => state.board)
  const showForm = useSelector(state => state.board.showFormCreateTask)

  const { t } = useTranslation();

  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const submitTodo = async (e) => {
    e.preventDefault();
    if (!todo) {
      return
    }

    const body = {
      id: Date.now(),
      userId: 1,
      boardId: state.boards[0].boardId,
      content: todo,
    }

    const response = await fetch(httpURL + "api/task", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
    })

    if (response.ok) {
      const response = await getTasks(tasksUrl)
      dispatch(setStateFromDataBase(response))
    }
    dispatch(openFormCreateTask());
    setTodo("");
  }


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
      {<label className={css.form__label} onClick={e => e.stopPropagation()}>
        <h4 className={css.form__title}>{t("Create a new Task")}</h4>
        <input className={css.form__input} value={todo} onChange={e => setTodo(e.target.value)} type="text" placeholder={t("input to do")} />
        <button className={css.form__submit} type='submit' onClick={submitTodo}>{t("submit")}</button>
      </label>}
    </form >
  );
};

export default FormCreateNewTask;