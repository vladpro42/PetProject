import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ButtonGoBack from '../UI/ButtonGoBack';
2
const Board = () => {
    const location = useLocation();
    const { state } = location;

    const [list, setList] = useState(JSON.parse(localStorage.getItem(`${state.title}`)) || []);
    const [taskName, setTaskName] = useState("");
    const [taskDescr, setTaskDescr] = useState("");

    useEffect(() => {
        localStorage.setItem(`${state.title}`, JSON.stringify(list));
        console.log(list)
    }, [list]);

    const addTask = e => {
        e.preventDefault()
        setList((prev) => [...prev, { taskName, taskDescr, id: Date.now(), complete: false }]);
        setTaskName("");
        setTaskDescr("");
    };

    const removeTask = id => {
        setList(prev => [...prev].filter(item => item.id !== id));
    };

    const complitetask = (e, id) => {
        setList(prev => [...prev].map( item => {
            if(item.id === id) {
                item.complete = !item.complete;
                return item;
            }
            return item;
        }));
        
        const target = e.target;
        if (target.textContent === "✔") {
           
            target.textContent = "⚪";
         
            return;
        } else {

            target.textContent = "✔";
           
        }
    }

    return (
        <div className="board" style={{ marginTop: "var(--heightHeader)" }}>
            <div className="container">
                <div className="board__inner">
                    <form className='board__form'>
                        <input value={taskName} onChange={e => setTaskName(e.target.value)} type="text" />
                        <input value={taskDescr} onChange={e => setTaskDescr(e.target.value)} type="text" />
                        <button onClick={addTask}>Create task</button>
                    </form>
                    <div className="board__column">
                        <h1>{state.title}</h1>
                        <h2>{state.descr}</h2>
                        <ul className='board__todo'>

                            {
                                list.map((item, index) => {
                                    return (
                                        <li className='todo__item' key={index}>
                                            <div>
                                                <h3>{item.taskName}</h3>
                                                <p>{item.taskDescr}</p>
                                            </div>
                                            <button onClick={() => removeTask(item.id)}>X</button>
                                            <button className='todo__compliete' onClick={e => complitetask(e, item.id)}>⚪</button>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <ButtonGoBack to={-1}>go back</ButtonGoBack>
                </div>
            </div>
        </div>

    );
};

export default Board;