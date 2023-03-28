import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleAlertDeleteBoard, removeBoard } from '../slice/createBoardSlice';
import css from "../style/AlertDelete.module.css";
import i18n from "../i18next"
import { useTranslation } from 'react-i18next';

const AlertDelete = ({ id }) => {

    const dispatch = useDispatch();

    const {t} = useTranslation();

    return (
        <div className={css.alert} onClick={() => dispatch(toggleAlertDeleteBoard("board"))}>
            <div className={css.alert__delete} onClick={e => e.stopPropagation()}>
                <h2 className={css.alert__title}>{t("are you sure")}</h2>
                <button onClick={() => dispatch(removeBoard(id))} className={[css.alert__button, css.alert__button_delete].join(" ")}>{t("delete")}</button>
                <button onClick={() => dispatch(toggleAlertDeleteBoard("board"))} className={css.alert__button}>{t("cancel")}</button>
            </div>
        </div>
    )
}

export default AlertDelete