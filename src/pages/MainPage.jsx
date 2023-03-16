import React, { useState, useContext, useRef } from 'react'

import AlertDelete from '../components/AlertDelete';
import BoardList from '../components/BoardList';
import FormCreateBoard from '../components/FormCreateBoard';
import { BoardContext } from '../hoc/BoardProvider';
import FormChangeBoard from '../components/FormChangeBoard';

import "../style/MainPage.css";

const MainPage = () => {

  const [board, dispatch] = useContext(BoardContext);
  const [showForm, setShowForm] = useState(false);
  const [showChangeForm, setShowChangeForm] = useState(false);
  const [alert, setAlert] = useState(false);

  const removeBoard = async (id) => {
    dispatch({ type: "removeBoard", payload: id })
    setAlert(prev => !prev)
  }

  const data = useRef(null);
  const editData = useRef(null)

  return (
    <section className='mt board'>
      <div className='container'>
        <div className="wrapper">
          <h1>Kanban board for teams to organize their work</h1>
          <BoardList
            setShowForm={setShowForm}
            showForm={showForm}
            setShowChangeForm={setShowChangeForm}
            showChangeForm={showChangeForm}
            dispatch={dispatch}
            board={board}
            data={data}
            editData={editData}
            setAlert={setAlert}
          />
          {
            alert ?
              <AlertDelete onClick={() => {
                if (data.current) {
                  removeBoard(data.current)
                }
              }} setAlert={setAlert}
              />
              : <></>
          }

          <button onClick={ () => setShowForm(prev => !prev)}>Create board</button>
          <FormChangeBoard editData={editData} showChangeForm={showChangeForm} setShowChangeForm={setShowChangeForm}/>
          <FormCreateBoard showForm={showForm} setShowForm={setShowForm} />
        </div>
      </div>
    </section >
  )
}

export default MainPage;