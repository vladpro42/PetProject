import { DragDropContext, Droppable } from "react-beautiful-dnd"
import { useDispatch, useSelector } from 'react-redux';

import { handleDragEnd, openFormCreateTask, showCreateBoardForm } from '../../slice/createBoardSlice';
import FormCreateBoard from '../FormCreateBoard';
import Column from './Column';
import FormCreateNewTask from "../FormCreateNewTask"
import ButtonCreateTask from "../../UI/ButtonCreateTask";

import css from './Board.module.css';
import { useTranslation } from "react-i18next";



const Board = () => {

  const { t } = useTranslation();

  const flagFormCreateNewTask = useSelector(state => state.board.showFormCreateTask);

  const dispatch = useDispatch()

  const onDragEnd = result => {
    dispatch(handleDragEnd(result))
  }

  const flagDeleteBoard = useSelector(state => state.board.alertDeleteBoard);

  return (
    <div className={css.board__container}>
      <nav className={css.board__navigate}>
        <button className={css.board__createBoard} onClick={() => dispatch(showCreateBoardForm())}>{t("create a new board")}</button>
        <ButtonCreateTask className={css.board__createBoard} onClick={() => dispatch(openFormCreateTask())} />
      </nav>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='column' direction='horizontal' type='column'>
          {(provided) => (
            <div
              className={css.app}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {/* {flagDeleteBoard && <AlertDelete id={{ "2-column": "2-column" }} />} */}
              <Column />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <FormCreateBoard />
      {flagFormCreateNewTask && <FormCreateNewTask flagFormCreateNewTask={flagFormCreateNewTask} />}


    </div>

  );
}

export default Board;
