import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RemoveButton from '../UI/RemoveButton';
import css from "../style/BoardList.module.css";
import EditButton from '../UI/EditButton';

const BoardList = ({ editData, board, data, setAlert, dispatch, setShowForm, showChangeForm, setShowChangeForm}) => {

    const [currentCard, setCurrentCard] = useState(null)

    const dragStartHandler = (e, board) => {
        setCurrentCard(board)
    }

    const dragEndHandler = (e) => {

    }

    const dragOverHandler = (e) => {
        e.preventDefault()
    }

    const dropHandler = (e, board) => {
        e.preventDefault()
        dispatch({ type: "drop", payload: { currentCard, board } })
    }

    const sortBoards = (a, b) => {
        if (a.order > b.order) {
            return 1
        } else {
            return -1
        }
    }

    return (
        <ul className='board__list'>
            {
                board.sort(sortBoards).map((item, index) => {
                    return (
                        <li
                            key={index.toString()}
                            className='board__item'
                            draggable={true}
                            onDragStart={e => dragStartHandler(e, item)}
                            onDragLeave={e => dragEndHandler(e)}
                            onDragEnd={e => dragEndHandler(e)}
                            onDragOver={e => dragOverHandler(e)}
                            onDrop={e => dropHandler(e, item)}
                        >
                            <Link
                                className='board__link' state={item} to={`${item.title}`}
                            >
                                <h3
                                    className={css.title}
                                >
                                    {item.title}
                                </h3>
                                <p className={css.descr}>{item.descr}</p>
                            </Link>
                            <EditButton
                                onClick={ () => {
                                    console.log("click")
                                    editData.current = item.id;
                                    setShowChangeForm(prev => !prev);
                                }}
                                className={css.title__edit}
                            />
                            <RemoveButton onClick={(e, id) => {
                                data.current = item.id;
                                setAlert(prev => !prev);
                            }} />
                        </li>
                    )
                })
            }
        </ul >
    );
};

export default BoardList;