import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import RemoveButton from '../../../../UI/RemoveButton';
import css from "../../Board.module.css";
import { useDispatch } from 'react-redux';
import { tasksUrl } from '../../../../config';
import { getTasks } from '../../utils/fetchTask';
import { setStateFromDataBase } from '../../reducer/createBoardSlice';

const Task = ({ board }) => {

    const dispatch = useDispatch();

    const onCLick = async (id) => {

        const response = await fetch(tasksUrl + `/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        })

        if (response.ok) {
            const response = await getTasks(tasksUrl)
            dispatch(setStateFromDataBase(response))
        }
    }

    return (
        <>
            {
                board.items.map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                        {(provided) => (
                            <p
                                className={css.todo__item}
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                            >
                                {task.content}
                                <RemoveButton
                                    className={css.removeButton}
                                    onClick={() => onCLick(task.id)} />
                            </p>
                        )}
                    </Draggable>
                ))
            }

        </>
    );
};

export default Task;