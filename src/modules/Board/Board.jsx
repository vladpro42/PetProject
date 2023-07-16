import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from 'react-redux';

import { getBoards, getFlagFormCreateTask, handleDragEnd, setStateFromDataBase } from './reducer/createBoardSlice';
import FormCreateBoard from './components/CreateBoard/FormCreateBoard';
import Column, { compareArr } from './components/Column/Column';
import FormCreateNewTask from "./components/CreateTask/FormCreateNewTask";

import css from './Board.module.css';
import SideBar from "./components/SideBar/SideBar";
import { backendUrl } from "../SignIn/api/auth-api";
import { getTasks } from "./utils/fetchTask";


const Board = () => {

  const flagFormCreateNewTask = useSelector(getFlagFormCreateTask);

  const dispatch = useDispatch();
  const boards = useSelector(getBoards)

  const onDragEnd = async (result) => {
    const sortedBoards = [...boards].sort(compareArr)
    const { destination, source, draggableId } = result
    const sourceObj = sortedBoards[source.index]
    const destObj = sortedBoards[destination.index]

    let sourceOrderValue = sourceObj.order
    let destinationOrderValue = destObj.order

    Promise.all([
      await fetch(backendUrl + "/board", {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({ id: sourceObj.id, order: destinationOrderValue }),
      }),
    ]).then(async () => {
      const boardsRes = await getTasks(backendUrl + "/task")
      dispatch(setStateFromDataBase(boardsRes))
    }).catch(err => console.log(err))







    /*  const response = await fetch(backendUrl + "/board", {
       method: "PUT",
       headers: {
         "Content-type": "application/json",
         "Accept": "application/json",
         "Authorization": `Bearer ${localStorage.getItem("token")}`
       },
       body: JSON.stringify({ id: sourceArray.id, order: destinationOrder }),
     }) */

    // const data = await response.json()

    //console.log(data)

    //dispatch(handleDragEnd(result));
  }



  return (
    <div className={css.board__container}>
      <SideBar />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='column' direction='horizontal' type='column'>
          {(provided) => (
            <div
              className={css.app}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <Column />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <FormCreateBoard />
      {flagFormCreateNewTask && <FormCreateNewTask />}
    </div>
  );
}

export default Board;
