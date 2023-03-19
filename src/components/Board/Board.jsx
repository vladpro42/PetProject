import { DragDropContext, Droppable } from "react-beautiful-dnd"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { handleDragEnd } from '../../slice/createBoardSlice';
import FormCreateBoard from '../FormCreateBoard';
import Column from './Column';

import css from './Board.module.css';



const Board = () => {

  const boards = useSelector(state => state.board.boards);


  const dispatch = useDispatch()

  const onDragEnd = result => {
    dispatch(handleDragEnd(result))
  }

  return (
    <div>
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


    </div>

  );
}

export default Board;
