import React from 'react';

import { useDispatch } from 'react-redux';
import { openFormCreateTask, showCreateBoardForm } from '../slice/createBoardSlice';
import { useTranslation } from 'react-i18next';
import ButtonCreateTask from "../UI/ButtonCreateTask";

import css from "./Board/Board.module.css";

const SideBar = () => {

    const { t } = useTranslation();
    const dispatch = useDispatch();

    return (
        <nav className={css.board__navigate}>
            <button
                className={css.board__createBoard}
                onClick={() => dispatch(showCreateBoardForm())}
            >
                {t("create a new board")}
            </button>
            <ButtonCreateTask
                className={css.board__createBoard}
                onClick={() => dispatch(openFormCreateTask())}
            />
        </nav>
    );
};

export default SideBar;