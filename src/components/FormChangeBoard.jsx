import React, { useContext, useState } from 'react';
import { BoardContext } from '../hoc/BoardProvider';

const FormCreateBoard = ({ editData, showForm, setShowForm }) => {
    const [board, dispatch] = useContext(BoardContext);

    const [title, setTitle] = useState("");
    const [descr, setDescr] = useState("");

    const changeBoard = e => {
        e.preventDefault();
        dispatch({ type: "changeBoard", payload: { title, descr, editData} });
        setShowForm(prev => !prev);
        setTitle("");
        setDescr("");
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

    return (
        <form
            className={showForm ? 'create__board' : 'none'}
            onClick={() => setShowForm(prev => !prev)}
        >
            <div
                className='board__inner'
                onClick={e => e.stopPropagation()}
            >
                <h2 className="board__title">Изменить Доску</h2>
                <label className="board__label">
                    <h4 className='board-label__title'>Название доски</h4>
                    <input
                        placeholder='Обязательное поле для ввода'
                        onBlur={handleBlur}
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        type="text"
                    />
                </label>
                <label className="board__label">
                    <h4 className='board-label__title'>Описание доски</h4>
                    <input
                        placeholder='Не обязательное поле'
                        value={descr}
                        onChange={e => setDescr(e.target.value)}
                        type="text"
                    />
                </label>
                <button className='boadrd__submit' onClick={ e => changeBoard(e)}>Изменить</button>
            </div>
        </form>
    );
}

export default FormCreateBoard;