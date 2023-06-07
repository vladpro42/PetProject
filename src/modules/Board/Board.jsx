import { DragDropContext, Droppable } from "react-beautiful-dnd"
import { useDispatch, useSelector } from 'react-redux';

import { handleDragEnd } from './components/reducer/createBoardSlice';
import FormCreateBoard from './components/CreateBoard/FormCreateBoard';
import Column from './components/Column/Column';
import FormCreateNewTask from "./components/CreateTask/FormCreateNewTask"

import css from './Board.module.css';
import SideBar from "./components/SideBar/SideBar";


const Board = () => {

  const flagFormCreateNewTask = useSelector(state => state.board.showFormCreateTask);

  const dispatch = useDispatch()

  const onDragEnd = result => {
    dispatch(handleDragEnd(result))
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
