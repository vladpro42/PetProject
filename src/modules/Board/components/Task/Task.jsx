import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import RemoveButton from '../../../../UI/RemoveButton';
import css from "../../Board.module.css";
import { useDispatch } from 'react-redux';
import { getTasks } from '../../utils/fetchTask';
import { setStateFromDataBase } from '../../reducer/createBoardSlice';
import { backendUrl } from '../../../SignIn/api/auth-api';

const Task = ({ board }) => {

    const dispatch = useDispatch();

    const onCLick = async (id) => {

        const response = await fetch(backendUrl + "/task" + `/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                "Accept": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
        })

        if (response.ok) {
            const response = await getTasks(backendUrl + "/task")
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