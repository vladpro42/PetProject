import { DragDropContext, Droppable } from "react-beautiful-dnd"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { handleDragEnd, openFormCreateTask, showCreateBoardForm } from '../../slice/createBoardSlice';
import FormCreateBoard from '../FormCreateBoard';
import Column from './Column';
import FormCreateNewTask from "../FormCreateNewTask"
import ButtonCreateTask from "../../UI/ButtonCreateTask";

import css from './Board.module.css';
import { useTranslation } from "react-i18next";


const Board = () => {

  const { t } = useTranslation();

  const boards = useSelector(state => state.board.boards);
  const flagFormCreateNewTask = useSelector(state => state.board.showFormCreateTask);

  const dispatch = useDispatch()

  const onDragEnd = result => {
    dispatch(handleDragEnd(result))
  }

  return (
    <div className={css.board__container}>
      <nav className={css.board__navigate} style={{ marginTop: "75px", background: 'gray' }}>
        <button className={css.board__createBoard} onClick={() => dispatch(showCreateBoardForm())}>{t("create a new board")}</button>
        <ButtonCreateTask className={css.board__createBoard} onClick={() => dispatch(openFormCreateTask())} />
      </nav>
      {/*  {!flagFormCreateNewTask && (
       
      )} */}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='column' direction='horizontal' type='column'>
          {(provided) => (
            <div
              className={css.app}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <Column boards={boards} />
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
