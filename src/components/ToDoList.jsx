import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ButtonGoBack from '../UI/ButtonGoBack';
import css from "../style/BoardList.module.css"
import FormCreateTask from './FormCreateTask';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

const ToDoList = () => {
    const location = useLocation();
    const { state } = location;
    console.log(state)

    const [list, setList] = useState(JSON.parse(localStorage.getItem(`${state.title}`)) || []);

    useEffect(() => {
        localStorage.setItem(`${state.title}`, JSON.stringify(list));
    }, [list, state.title]);


    const removeTask = id => {
        setList(prev => [...prev].filter(item => item.id !== id));
    };

    const complitetask = (e, id) => {
        setList(prev => [...prev].map(item => {
            if (item.id === id) {
                item.complete = !item.complete;
                return item;
            }
            return item;
        }));
    };

    const onDragEnd = results => {
        console.log(results)

        const { draggableId, type, source, mode, reason, destination } = results

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppabledId &&
            destination.index === source.index
        ) {
            return;
        }

        const column = list
    };

    return (
        <DragDropContext
            onDragEnd={onDragEnd}
        >
            <div className={css.todo} style={{ marginTop: "var(--heightHeader)" }}>
                <div className="container">
                    <div className={css.todo__inner}>
                        <div className={css.todo__column}>
                            <h1 className={css.todo__title}>{state.title}</h1>
                            <h2 className={css.descr}>{state.descr}</h2>
                            <Droppable droppableId={"droppable-1"}>
                                {(provided) => (
                                    <ul
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                        className={css.todo__list}
                                    >
                                        {
                                            list.map((item, index) => {
                                                return (
                                                    <Draggable key={index} draggableId={item.id.toString()} index={index}>
                                                        {(provided) => (
                                                            <li
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                ref={provided.innerRef}
                                                                className={css.todo__item} >
                                                                <div>
                                                                    <h3>{item.taskName}</h3>
                                                                    <p>{item.taskDescr}</p>
                                                                </div>
                                                                <div>
                                                                    <button onClick={() => removeTask(item.id)}>X</button>
                                                                    <button
                                                                        className={css.todo__compliete}
                                                                        onClick={e => complitetask(e, item.id)}
                                                                    >
                                                                       { item.complete
                                                                        ?  "✔"
                                                                        : "⚪"}
                                                                    </button>
                                                                </div>
                                                            </li>
                                                        )}
                                                    </Draggable>
                                                )
                                            })
                                        }
                                        {provided.placeholder}
                                    </ul>
                                )}
                            </Droppable>
                        </div>
                        <FormCreateTask setList={setList} />
                    </div>
                    <ButtonGoBack to={-1}>go back</ButtonGoBack>
                </div>
            </div>
        </DragDropContext>

    );
};

export default ToDoList;