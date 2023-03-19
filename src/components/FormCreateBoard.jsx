import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { BoardContext } from '../hoc/BoardProvider';
import { showCreateBoardForm, createBoard } from "../slice/createBoardSlice"

const FormCreateBoard = () => {
    /* const [board, dispatch] = useContext(BoardContext); */
    const showForm = useSelector(state => state.board.showBoard)
    const dispatchRedux = useDispatch();

    const [title, setTitle] = useState("");
    const [descr, setDescr] = useState("");

    const submitBoard = event => {
        event.preventDefault()
        /*  dispatch({ type: "createBoard", payLoad: { title, descr, id: Date.now(), order: board.length + 1 } }); */
        dispatchRedux(createBoard({ descr, title }))
        dispatchRedux(showCreateBoardForm())
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
            onClick={() => dispatchRedux(showCreateBoardForm())}
        >
            <div
                className='board__inner'
                onClick={e => e.stopPropagation()}
            >
                <h2 className="board__title">Create board</h2>
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
                <button className='boadrd__submit' onClick={(event) => submitBoard(event)}>Create</button>
            </div>
        </form>
    );
}

export default FormCreateBoard;