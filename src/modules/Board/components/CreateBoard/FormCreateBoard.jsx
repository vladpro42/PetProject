import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { showCreateBoardForm, setStateFromDataBase } from "../../reducer/createBoardSlice"
import css from './FormCreateBoard.module.css'
import { backendUrl } from '../../../SignIn/api/auth-api';

const FormCreateBoard = () => {
    const { t } = useTranslation();
    const boards = useSelector(state => state.board.boards)
    const showForm = useSelector(state => state.board.showBoard)
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");

    const submitBoard = async event => {
        event.preventDefault()
        if (!title) {
            return
        }
        dispatch(showCreateBoardForm())
        setTitle("");

        const boardId = Date.now() + "-column"

        const body = {
            title,
            boardId,
        }

        const response = await fetch(backendUrl + "/board", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });


        if (!response.ok) {
            return
        }

        const res = await fetch(backendUrl + "/task/");
        const data = await res.json()
        const boards = Array.from(data)
        dispatch(setStateFromDataBase(boards))

    };

    const handleBlur = e => {
        const input = e.target
        if (input.value.trim() === "") {
            input.style.borderColor = "red";
            input.placeholder = "Не менее 1 символа";
            return;
        }
        input.style.borderColor = "transparent";
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
        <form
            className={showForm ? css.create__board : css.none}
            onClick={() => dispatch(showCreateBoardForm())}
        >
            <div
                className={css.board__inner}
                onClick={e => e.stopPropagation()}
            >
                <h2 className={css.board__title}>{t("Create board")}</h2>
                <label className={css.board__label}>
                    <h4 className={css.boardLabel__title}>{t("Board name")}</h4>
                    <input
                        className={css.board__input}
                        placeholder='Обязательное поле для ввода'
                        onBlur={handleBlur}
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        type="text"
                    />
                </label>
                <button className={css.board__submit} onClick={(event) => submitBoard(event)}>{t("Create")}</button>
            </div>
        </form>
    );
}

export default FormCreateBoard;