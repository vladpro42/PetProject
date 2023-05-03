import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import RemoveButton from '../../UI/RemoveButton';
import css from "./Board.module.css";
import { removeTask } from "../../slice/createBoardSlice";
import { useDispatch } from 'react-redux';

const Task = ({ item }) => {
    const dispatch = useDispatch();

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
                            >
                                {child.content}
                                <RemoveButton
                                    className={css.removeButton}
                                    onClick={() => dispatch(removeTask({ boardId: item.boardId, taskId: child.id }))} />
                            </p>
                        )}
                    </Draggable>
                ))
            }

        </>
    );
};

export default Task;