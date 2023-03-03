import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RemoveButton from '../UI/RemoveButton';

const BoardList = ({ board, data, setAlert, dispatch }) => {

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
        dispatch({type: "drop", payload: {currentCard, board}})
    }

    const sortBoards = (a, b) => {
        if(a.order > b.order) {
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
                            onDragStart={ e => dragStartHandler(e, item)}
                            onDragLeave={ e => dragEndHandler(e)}
                            onDragEnd={ e => dragEndHandler(e)}
                            onDragOver={ e => dragOverHandler(e)}
                            onDrop={ e => dropHandler(e, item)}
                        >
                            <Link className='board__link' state={item} to={`${item.title}`}>
                                <div >
                                    <h3>{item.title}</h3>
                                    <p>{item.descr}</p>
                                </div>
                            </Link>
                            <RemoveButton onClick={(e, id) => {
                                data.current = item.id
                                setAlert(prev => !prev)
                            }} />
                        </li>
                    )
                })
            }
        </ul >
    );
};

export default BoardList;