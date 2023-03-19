import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import Task from './Task'
import css from "./Board.module.css"

const Column = ({ boards }) => {

    console.log(boards)
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
                                    <h1 {...provided.dragHandleProps}>{item.title}</h1>
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
                                                {provided.placeholder }
                                            </>
                                        )}
                                    </Droppable>

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