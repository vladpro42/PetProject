import React from 'react';
import css from "../style/BoardList.module.css";
import { useState } from 'react';

const FormCreateTask = ({setList}) => {

    const [taskName, setTaskName] = useState("");
    const [taskDescr, setTaskDescr] = useState("");


    const addTask = e => {
        e.preventDefault()
        setList((prev) => [...prev, { taskName, taskDescr, id: Date.now(), complete: false }]);
        setTaskName("");
        setTaskDescr("");
    };

    return (
        <form className={css.todo__form}>
            <h2 className={[css.title, css.form__title].join(" ")}>Create task</h2>
            <div className={css.container__label}>
                <label className={css.label}>
                    <h6 className={css.label__title}>Название</h6>
                    <input value={taskName} onChange={e => setTaskName(e.target.value)} type="text" />
                </label>
                <label className={css.label}>
                    <h6 className={css.label__title}>Описание</h6>
                    <input value={taskDescr} onChange={e => setTaskDescr(e.target.value)} type="text" />
                </label>
            </div>
            <button onClick={addTask}>Create task</button>
        </form>
    );
};

export default FormCreateTask;