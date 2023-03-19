import { useCallback, useState } from 'react';
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import FormCreateBoard from '../FormCreateBoard';
import { handleDragEnd, setBoards } from '../../slice/createBoardSlice';

import css from './Board.module.css';
import Column from './Column';


const initState = [
  {
    boardId: "1-column", title: "ToDO", items: [
      { id: 1, content: "call you back" },
      { id: 2, content: "I'll need to buy some food " },
      { id: 3, content: "Learn English today" },
      { id: 4, content: "Learn Redux" }
    ]
  },
  {
    boardId: "2-column", title: "progress", items: [
      { id: 5, content: "think about it" },
      { id: 6, content: "play chess" },
      { id: 7, content: "play LOL" },
      { id: 8, content: "Lern Redux" }
    ]
  },
  {
    boardId: "3-column", title: "done", items: [
      { id: 9, content: "go to the gym" },
      { id: 10, content: "play chess" },
      { id: 11, content: "play LOL" },
      { id: 12, content: "Learn TypeScript" }
    ]
  }
]

const Board = () => {

  const boards = useSelector(state => state.board.boards)

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
