import React, { useEffect, useRef } from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { useSelector, useDispatch } from 'react-redux'
import { getStateFromDataBase, toggleAlertDeleteBoard } from '../../slice/createBoardSlice'

import RemoveButton from "../../UI/RemoveButton"
import AlertDelete from "../AlertDelete";
import Task from './Task'
import { useGetAllTasksQuery } from '../../service/task'

import css from "./Board.module.css"


const Column = ({ }) => {


    const dispatch = useDispatch();

    const boards = useSelector(state => state.board.boards)

    const flagDeleteBoard = useSelector(state => state.board.alertDeleteBoard);

    const needId = useRef(null);

    const handleClick = (event, id) => {
        dispatch(toggleAlertDeleteBoard("board"))
        needId.current = id
    }


    return (
        <>
            {
                boards.map((board, index) => {
                    return (
                        <Draggable key={board.boardId} draggableId={JSON.stringify(board)} index={index}>
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    className={css.boards}
                                >
                                    <h1 {...provided.dragHandleProps}>
                                        {board.title}
                                    </h1>
                                    <Droppable droppableId={board.boardId} type='task'>
                                        {(provided) => (
                                            <>
                                                <div
                                                    className={css.todo__list}
                                                    ref={provided.innerRef}
                                                    {...provided.droppableProps}
                                                >
                                                    <Task board={board} />
                                                </div>
                                                {provided.placeholder}
                                                {(flagDeleteBoard && board.boardId == needId.current) ? <AlertDelete id={needId.current} /> : <></>}
                                            </>
                                        )}
                                    </Droppable>

                                    <RemoveButton
                                        onClick={(e) => handleClick(e, board.boardId)}
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