import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import css from "./Board.module.css"

const Task = ({ item }) => {
    return (
        <>
            {
                item.items.map((child, index) => (
                    <Draggable key={child.id} draggableId={child.id.toString()} index={index}>
                        {(provided) => (
                            <p
                                className={css.todo__item}
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                            >{child.content}</p>
                        )}
                    </Draggable>
                ))
            }
        </>
    )
}

export default Task