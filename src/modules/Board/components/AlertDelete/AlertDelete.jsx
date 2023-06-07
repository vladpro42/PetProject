import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleAlertDeleteBoard, setStateFromDataBase } from '../reducer/createBoardSlice';
import css from "./AlertDelete.module.css";
import { useTranslation } from 'react-i18next';
import { httpURL } from '../../../../config';

const AlertDelete = ({ id }) => {

    const dispatch = useDispatch();

    const { t } = useTranslation();

    const handleClick = async (id) => {

        const response = await fetch(httpURL + 'api/board/' + id, {
            method: "DELETE",
        })

        if (response.ok) {
            const response = await fetch(httpURL + "api/task/");
            const data = await response.json()
            const boards = Array.from(data)

            dispatch(setStateFromDataBase(boards))
        }
    }

    return (
        <div className={css.alert} onClick={() => dispatch(toggleAlertDeleteBoard("board"))}>
            <div className={css.alert__delete} onClick={e => e.stopPropagation()}>
                <h2 className={css.alert__title}>{t("are you sure")}</h2>
                <button onClick={() => handleClick(id)} className={[css.alert__button, css.alert__button_delete].join(" ")}>{t("delete")}</button>
                <button onClick={() => dispatch(toggleAlertDeleteBoard("board"))} className={css.alert__button}>{t("cancel")}</button>
            </div>
        </div>
    )
}

export default AlertDelete