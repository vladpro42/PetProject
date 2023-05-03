import React, { useRef } from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { useSelector, useDispatch } from 'react-redux'
import { toggleAlertDeleteBoard } from '../../slice/createBoardSlice'

import RemoveButton from "../../UI/RemoveButton"
import AlertDelete from "../AlertDelete";
import Task from './Task'

import css from "./Board.module.css"


const Column = ({ boards }) => {

    const flagDeleteBoard = useSelector(state => state.board.alertDeleteBoard);

    const dispatch = useDispatch();
    const needId = useRef(null);

    const handleClick = (event, id) => {
        dispatch(toggleAlertDeleteBoard("board"))
        needId.current = id
    }


    return (
        <>
            {
                boards.map((item, index) => {
                    return (
                        <Draggable key={item.boardId} draggableId={JSON.stringify(item)} index={index}>
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    className={css.boards}
                                >
                                    <h1 {...provided.dragHandleProps}>
                                        {item.title}
                                    </h1>
                                    <Droppable droppableId={item.boardId} type='task'>
                                        {(provided) => (
                                            <>
                                                <div
                                                    className={css.todo__list}
                                                    ref={provided.innerRef}
                                                    {...provided.droppableProps}
                                                >
                                                    <Task item={item} />
                                                </div>
                                                {provided.placeholder}
                                                {console.log(flagDeleteBoard, item.boardId, needId.current)}
                                                {(flagDeleteBoard && item.boardId == needId.current) ? <AlertDelete id={needId.current} /> : <></>}
                                            </>
                                        )}
                                    </Droppable>

                                    <RemoveButton
                                        onClick={(e) => handleClick(e, item.boardId)}
                                    />
                                </div>
                            )
                            }
                        </Draggable>
                    )
                })
            }
        </>
    )
}

export default Column