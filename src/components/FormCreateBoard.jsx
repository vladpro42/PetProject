import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { showCreateBoardForm, createBoard } from "../slice/createBoardSlice"
import css from '../style/FormCreateBoard.module.css'

const FormCreateBoard = () => {
    const { t } = useTranslation();

    const showForm = useSelector(state => state.board.showBoard)
    const dispatchRedux = useDispatch();

    const [title, setTitle] = useState("");

    const submitBoard = event => {
        event.preventDefault()
        dispatchRedux(createBoard({ title }))
        dispatchRedux(showCreateBoardForm())
        setTitle("");
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
    }, [showForm])


    return (
        <form
            className={showForm ? css.create__board : css.none}
            onClick={() => dispatchRedux(showCreateBoardForm())}
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
                <button className={css.boadrd__submit} onClick={(event) => submitBoard(event)}>{t("Create")}</button>
            </div>
        </form>
    );
}

export default FormCreateBoard;