import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleAlertDeleteBoard, removeBoard } from '../slice/createBoardSlice';
import css from "../style/AlertDelete.module.css"

const AlertDelete = ({ id }) => {

    const dispatch = useDispatch()

    return (
        <div className={css.alert}>
            <div className={css.alert__delete}>
                <h2 className={css.alert__title}>Вы уверены?</h2>
                <button onClick={() => dispatch(removeBoard(id))} className={[css.alert__button, css.alert__button_delete].join(" ")}>Удалить</button>
                <button onClick={() => dispatch(toggleAlertDeleteBoard("board"))} className={css.alert__button}>Отменить</button>
            </div>
        </div>
    )
}

export default AlertDelete