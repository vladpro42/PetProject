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
    const { data, error, isLoading } = useGetAllTasksQuery("");

    console.log(data)

    useEffect(() => {
        dispatch(getStateFromDataBase(data));
    }, [data])


    const boards = useSelector(state => state.board.boards)

    const flagDeleteBoard = useSelector(state => state.board.alertDeleteBoard);

    const needId = useRef(null);

    const handleClick = (event, id) => {
        dispatch(toggleAlertDeleteBoard("board"))
        needId.current = id
    }


    return (
        <>

            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : boards ? (

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

            ) : null}
            {

            }
        </>
    )
}

export default Column